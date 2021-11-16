let ok = true;

const fetchCustom = (time, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ok) {
                resolve(task);
            } else {
                reject('Error');
            }
        }, time);
    });
};

export default fetchCustom;