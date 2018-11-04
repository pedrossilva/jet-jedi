"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function Controller(window, document, containerName) {
  _classCallCheck(this, Controller);

  this.__window = window;
  this.__document = document;
  this.__container = this.__document.getElementById(containerName);

  if (!this.__container) {
    throw 'Container element must be supplied';
  }

  this.__container.innerText = "Controller Loaded";
};

var _default = Controller;
exports.default = _default;