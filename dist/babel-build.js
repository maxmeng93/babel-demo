"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _person = _interopRequireDefault(require("./person"));

console.log(_person.default);
var str = '';
str = "2";
var app = document.getElementById('app');
app.innerText = '这是一个网页';
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var a = obj.a,
    b = obj.b,
    z = (0, _objectWithoutProperties2.default)(obj, ["a", "b"]);
console.log(a);
console.log(b);
console.log(z);
