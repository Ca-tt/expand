let storage = window.localStorage;

export function loadFromStorage(data: string, defaultValue: boolean) {
    let item = JSON.parse(storage.getItem(data));

    if (item == null || item == undefined) {
        item = defaultValue;
    }
    return item;
}

export function saveToStorage(data: string, value: boolean) {
    storage.setItem(data, value.toString());
}