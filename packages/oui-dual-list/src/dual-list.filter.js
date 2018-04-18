export default function (items, sourceFilterKey, property) {
    return items.filter(item => {
        let value;
        if (!property) {
            value = item;
        } else {
            value = property.split(".").reduce((prev, curr) => prev ? prev[curr] : undefined, item);
        }
        return value.match(new RegExp(sourceFilterKey, "i"));
    });
}
