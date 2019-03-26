const isObject = val => typeof val === 'object' && !Array.isArray(val);

/**
 * Deep flatten object keys
 * @param {Object} data
 * @param {String} node
 */
const flatten = (data = {}, node = '') => {
    return Object.keys(data).reduce((memo, key) => {
        const currentPath = node ? `${node}.${key}` : key;
        if (isObject(data[key]) && Object.keys(data[key]).length > 0) {
            const recursivePath = flatten(data[key], currentPath);
            memo.push(...recursivePath);
        } else if (Array.isArray(data[key])) {
            data[key].forEach(item => memo.push(`${currentPath}.${item}`));
        } else {
            memo.push(currentPath);
        }
        return memo;
    }, []);
};

module.exports = flatten;
