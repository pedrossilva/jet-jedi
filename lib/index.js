"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Controller = _interopRequireDefault(require("./Controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function (window, document, containerName) {
  var controller = new _Controller.default(window, document, containerName);
}(window, document, 'container');

exports.default = _default;