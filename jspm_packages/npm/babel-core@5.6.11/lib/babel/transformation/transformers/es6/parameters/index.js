/* */ 
"format cjs";
"use strict";

var _toolsProtectJs2 = require("./../../../../tools/protect.js");

var _toolsProtectJs3 = _interopRequireDefault(_toolsProtectJs2);

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _traversalVisitors = require("../../../../traversal/visitors");

var visitors = _interopRequireWildcard(_traversalVisitors);

var _default = require("./default");

var def = _interopRequireWildcard(_default);

var _rest = require("./rest");

var rest = _interopRequireWildcard(_rest);

_toolsProtectJs3["default"](module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var metadata = {
  group: "builtin-advanced"
};

exports.metadata = metadata;
var visitor = visitors.merge([rest.visitor, def.visitor]);
exports.visitor = visitor;