export default class {
    constructor () {
        this.pageSize = 25;
    }

    /**
     * St the default page size
     * @param {Number} pageSize the default page size
     */
    setPageSize (pageSize) {
        this.pageSize = pageSize;
        return this;
    }

    $get () {
        return {
            pageSize: this.pageSize
        };
    }
}
