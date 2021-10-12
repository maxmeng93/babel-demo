"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

var a = [1, 2, 3, 4, 5];
console.log(a.includes(7));
new Promise(function () {});
var obj = {
  x: 1,
  y: 2,
  a: 3,
  b: 4
};
var x = obj.x,
    y = obj.y,
    z = (0, _objectWithoutProperties2.default)(obj, ["x", "y"]);
console.log(x);
console.log(y);
console.log(z);
