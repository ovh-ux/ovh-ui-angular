import get from "lodash/get";
import isUndefined from "lodash/isUndefined";

export function hasProperty (obj, prop = "") {
    return !isUndefined(get(obj, prop));
}
