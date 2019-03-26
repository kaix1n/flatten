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

// const data = {
//     m: {
//         a: ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7'],
//         b: {
//             c: ['c1', 'c2'],
//             d: {
//                 e: ['e1', 'd2'],
//                 f: { g: ['g1'] },
//             },
//         },
//         h: { i: ['i1'] },
//         k: 'k1',
//     },
// };

// const debug = flatten(data);
// console.log('>>\n:', debug);

module.exports = flatten;
