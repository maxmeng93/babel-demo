import person from './person';
console.log(person);

const a = [1, 2, 3, 4, 5];
console.log(a.includes(7));
console.log('aaa111')

new Promise(() => { })

const obj = { x: 1, y: 2, a: 3, b: 4 }
const { x, y, ...z } = obj;
console.log(x)
console.log(y)
console.log(z)

const app = document.getElementById('app');
(app as HTMLElement).innerText = '这是一个网页';