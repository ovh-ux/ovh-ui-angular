import { capitalize, range } from "../util";
import template from "./pagination.html";

// import "./default-pagination.less";

const keyCodes = {
    escape: 27,
    space: 32
};
const maxPageButtons = 5;

export default {
    template,
    bindings: {
        currentPage: "<",
        pageCount: "<",
        pageSize: "<",
        totalItems: "<",
        onNextPage: "&",
        onPreviousPage: "&",
        onPage: "&",
        onPageSizeChange: "&"
    },
    controller: class {
        constructor ($timeout, ouiTableConfiguration) {
            "ngInject";

            this.$timeout = $timeout;
            this.config = ouiTableConfiguration;
        }

        $onInit () {
            this.buttons = this.getButtons();
            this.pagesList = this.getPagesList();
        }

        $onChanges (changes) {
            if (changes.pageCount) {
                this.buttons = this.getButtons();
                this.pagesList = this.getPagesList();
            }
        }

        getButtons () {
            const buttons = [];
            for (let i = 0; i < Math.min(maxPageButtons, this.pageCount); i++) {
                buttons.push({
                    page: i + 1,
                    offset: i * this.pageSize
                });
            }
            return buttons;
        }

        getOffset () {
            return ((this.currentPage - 1) * this.pageSize) + 1;
        }

        getLastElementOffset () {
            return Math.min(this.getOffset() + this.pageSize - 1, this.totalItems);
        }

        pageSizeKeydown ($event) {
            // Space
            if ($event.keyCode === keyCodes.space) {
                $event.preventDefault();
                this.pageSizeToggle($event);
            } else

            // Escape
            if ($event.keyCode === keyCodes.escape) {
                $event.preventDefault();
                this.menuPageSizeVisible = false;
            }
        }

        pageSizeToggle () {
            this.menuPageSizeVisible = !this.menuPageSizeVisible;
            this.menuPageNumberVisible = false;
        }

        setPageSize (pageSize) {
            this.menuPageSizeVisible = false;
            if (pageSize === this.pageSize) {
                return;
            }
            this.onPageSizeChange({ $pageSize: pageSize });

            // Buttons list must be changed on next tick
            // to let this.pageCount value being propagated.
            this.$timeout(() => {
                this.buttons = this.getButtons();
                this.pagesList = this.getPagesList();
            });
        }

        setPageNumber (page) {
            if (page === this.currentPage) {
                return;
            }

            let pageNumber;
            if (!pageNumber) { // Used with native select.
                pageNumber = this.currentPage;
            }

            this.menuPageNumberVisible = false;

            this.onPage({ $page: pageNumber });
        }

        getPagesList () {
            return range(this.pageCount).map(item => item + 1);
        }

        capitalize (string) { // eslint-disable-line
            return capitalize(string);
        }
    }
};
