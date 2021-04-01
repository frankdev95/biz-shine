const storage = {
    data: {},
    get: key => {
        return storage.data[key];
    },
    set: (key, data) => {
        delete storage.data[key], storage.data[key] = data;
    },
    clear: () => {
        for(let key in storage.data) delete storage.data[key];
    }
};
