"use strict";

var a = [1, 2, 3, 4, 5];
console.log(a.includes(7));
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _x$y$a$b = {
  x: 1,
  y: 2,
  a: 3,
  b: 4
},
    x = _x$y$a$b.x,
    y = _x$y$a$b.y,
    z = (0, _objectWithoutProperties2.default)(_x$y$a$b, ["x", "y"]);
console.log(x);
console.log(y);
console.log(z);
