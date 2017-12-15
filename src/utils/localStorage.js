var localStorage = {
    getData: function(key) {
        return Promise.resolve(JSON.parse(window.localStorage.getItem(key), (key, value) => {
            if (key === 'date'){
                return new Date(value);
            }
             
            return value;
        }));
    },
    setData: function(key, data) {
        return new Promise((resolve, reject) => {
            if (key && data) {
                return window.localStorage.setItem(key, JSON.stringify(data));
            }

            return reject();
        });
    },
};

export default localStorage;