const a = [1, 2, 3, 4, 5];
console.log(a.includes(7));

new Promise(() => { })

const obj = { x: 1, y: 2, a: 3, b: 4 }
const { x, y, ...z } = obj;
console.log(x)
console.log(y)
console.log(z)