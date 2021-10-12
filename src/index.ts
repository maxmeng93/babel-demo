// import obja from './a';
// console.log(obja);

const a = [1, 2, 3, 4, 5];
console.log(a.includes(7));
console.log('aaa111')

new Promise(() => { })

const obj = { x: 1, y: 2, a: 3, b: 4 }
const { x, y, ...z } = obj;
console.log(x)
console.log(y)
console.log(z)

const obj2 = { aa: 1, bb: 2, cc: 3, dd: 4 }
const {aa, bb, ...zz} = obj2;
console.log(aa)
console.log(bb)
console.log(zz)