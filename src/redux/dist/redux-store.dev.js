"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _redux = require("redux");

var _newsReducer = _interopRequireDefault(require("./news-reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reducers = (0, _redux.combineReducers)({
  newsPage: _newsReducer["default"]
});
var store = (0, _redux.createStore)(reducers);
window.store = store;
var _default = store;
exports["default"] = _default;