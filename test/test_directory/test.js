const dirToTree = require('directory-tree')
const util = require('util')


// const tree = dirToTree('./test', { extensions: /\.md/, exclude: /node_modules/ }, null, (item, PATH, stats) => {
//     console.log(item);
// });
// const tree2 = dirToTree('../test_directory', { extensions: /\.md/, exclude: /node_modules/ }, null, (item, PATH, stats) => {
//     console.log(item);
// });
const tree3 = dirToTree('.', { extensions: /\.md/, exclude: /node_modules/ });


// console.log(tree)
// console.log(tree2)
// console.log(tree3)
console.log(util.inspect(tree3, {showHidden: false, depth: null}))