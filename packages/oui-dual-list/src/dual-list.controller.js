import { addBooleanParameter, addDefaultParameter } from "@oui-angular/common/component-utils";
import { get } from "lodash";
export default class {
    constructor ($q, $element, $attrs, $window, $timeout, ouiDualListProvider) {
        "ngInject";

        this.$q = $q;
        this.$element = $element;
        this.$attrs = $attrs;
        this.$window = $window;
        this.$timeout = $timeout;
        this.dualListProvider = ouiDualListProvider;
        this.MAX_MOBILE_WIDTH = 768;
    }

    $onInit () {
        addDefaultParameter(this, "sourceListLabel", this.dualListProvider.translations.sourceListLabel);
        addDefaultParameter(this, "targetListLabel", this.dualListProvider.translations.targetListLabel);
        addDefaultParameter(this, "moveAllLabel", this.dualListProvider.translations.moveAllLabel);
        addDefaultParameter(this, "removeAllLabel", this.dualListProvider.translations.removeAllLabel);
        addDefaultParameter(this, "addLabel", this.dualListProvider.translations.addLabel);
        addDefaultParameter(this, "sourceListEmptyLabel", this.dualListProvider.translations.sourceListEmptyLabel);
        addDefaultParameter(this, "targetListEmptyLabel", this.dualListProvider.translations.targetListEmptyLabel);
        addDefaultParameter(this, "ariaSourceHideContent", this.dualListProvider.translations.ariaSourceHideContent);
        addDefaultParameter(this, "ariaSourceShowContent", this.dualListProvider.translations.ariaSourceShowContent);
        addDefaultParameter(this, "ariaTargetHideContent", this.dualListProvider.translations.ariaTargetHideContent);
        addDefaultParameter(this, "ariaTargetShowContent", this.dualListProvider.translations.ariaTargetShowContent);
        addDefaultParameter(this, "ariaSourceSearchText", this.dualListProvider.translations.ariaSourceSearchText);
        addDefaultParameter(this, "ariaRemoveText", this.dualListProvider.translations.ariaRemoveText);
        addDefaultParameter(this, "property", null);
        addBooleanParameter(this, "bulkActionEnabled");

        this.sourceList = this.sourceList || [];
        this.targetList = this.targetList || [];
        this.onAdd = this.onAdd || null;
        this.onRemove = this.onRemove || null;

        this.loadingMap = {};
        this.sourceListLoading = false;
        this.targetListLoading = false;
        this.isSourceOpen = true;
        this.isTargetOpen = false;
        this.loadSourceList();
        this.loadTargetList();
    }

    $postLink () {
        this.isTargetOpen = !this.isMobile();
        this.$timeout(() => {
            this.$element.addClass("oui-dual-list");
        });
    }

    isMobile () {
        return this.$window.innerWidth <= this.MAX_MOBILE_WIDTH;
    }

    toggleSource () {
        this.isSourceOpen = !this.isSourceOpen;
    }

    toggleTarget () {
        this.isTargetOpen = !this.isTargetOpen;
    }

    getProperty (item) {
        return get(item, this.property, item);
    }

    isLoading (item) {
        const uniqueName = this.getProperty(item);
        return this.loadingMap[uniqueName];
    }

    setLoading (item, state) {
        const uniqueName = this.getProperty(item);
        this.loadingMap[uniqueName] = state;
    }

    loadSourceList () {
        if (this.sourceListLoading) {
            return this.$q.reject(false);
        }
        this.sourceListLoading = true;
        return this.$q.when(this.sourceList)
            .then(items => {
                this.sourceList = items.data ? items.data : items;
            })
            .finally(() => {
                this.sourceListLoading = false;
            });
    }

    loadTargetList () {
        if (this.targetListLoading) {
            return this.$q.reject(false);
        }
        this.targetListLoading = true;
        return this.$q.when(this.targetList)
            .then(items => {
                this.targetList = items.data ? items.data : items;
            })
            .finally(() => {
                this.targetListLoading = false;
            });
    }

    add (index, item) {
        if (this.isLoading(item)) {
            return;
        }
        this.sourceList.splice(index, 1);
        this.targetList.push(item);
        if (this.onAdd) {
            this.setLoading(item, true);
            this.onAdd({ items: [item] })
                .catch(() => {
                    const newIndex = this.targetList.indexOf(item);
                    this.targetList.splice(newIndex, 1);
                    this.sourceList.push(item);
                })
                .finally(() => this.setLoading(item, false));
        }
    }

    remove (index, item) {
        if (this.isLoading(item)) {
            return;
        }
        this.targetList.splice(index, 1);
        this.sourceList.push(item);
        if (this.onRemove) {
            this.setLoading(item, true);
            this.onRemove({ items: [item] })
                .catch(() => {
                    const newIndex = this.sourceList.indexOf(item);
                    this.sourceList.splice(newIndex, 1);
                    this.targetList.push(item);
                })
                .finally(() => this.setLoading(item, false));
        }
    }

    addAll () {
        console.log("add all");
        const list = this.sourceList.filter(item => !this.isLoading(item));
        if (list.length === 0) {
            return;
        }
        list.forEach(item => {
            // move to target list and set loading
            this.targetList.push(item);
            this.setLoading(item, true);

            // remove from source list
            const newIndex = this.sourceList.indexOf(item);
            this.sourceList.splice(newIndex, 1);
        });
        if (this.onAdd) {
            this.onAdd({ items: list })
                .then(() => {
                    // all items successfully moved, remove loading
                    list.forEach(item => this.setLoading(item, false));
                }).catch(failedItems => {
                    // some or all items failed to move
                    failedItems.forEach(item => {
                        // move back to source list and remove loading
                        this.sourceList.push(item);
                        this.setLoading(item, false);

                        // remove from target list
                        const newIndex = this.targetList.indexOf(item);
                        this.targetList.splice(newIndex, 1);
                    });

                    // remove loading for all successfull items
                    list.forEach(item => this.setLoading(item, false));
                });
        } else {
            list.forEach(item => {
                this.setLoading(item, false);
            });
        }
    }

    removeAll () {
        const list = this.targetList.filter(item => !this.isLoading(item));
        if (list.length === 0) {
            return;
        }
        list.forEach(item => {
            // move to source list and set loading
            this.sourceList.push(item);
            this.setLoading(item, true);

            // remove from target list
            const newIndex = this.targetList.indexOf(item);
            this.targetList.splice(newIndex, 1);
        });
        if (this.onAdd) {
            this.onAdd({ items: list })
                .then(() => {
                    // all items successfully moved, remove loading
                    list.forEach(item => this.setLoading(item, false));
                }).catch(failedItems => {
                    // some or all items failed to move
                    failedItems.forEach(item => {
                        // move back to target list and remove loading
                        this.targetList.push(item);
                        this.setLoading(item, false);

                        // remove from source list
                        const newIndex = this.sourceList.indexOf(item);
                        this.sourceList.splice(newIndex, 1);
                    });

                    // remove loading for all successfull items
                    list.forEach(item => this.setLoading(item, false));
                });
        } else {
            list.forEach(item => {
                this.setLoading(item, false);
            });
        }
    }
}

