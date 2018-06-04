import { get } from "lodash";
export default function (items, sourceFilterKey, property) {
    return items.filter(item => {
        let value;
        if (!property) {
            value = item;
        } else {
            value = get(item, property, item);
        }
        return value.match(new RegExp(sourceFilterKey, "i"));
    });
}
