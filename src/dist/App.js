"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var Header_1 = require("./components/Header/Header");
var Title_1 = require("./components/Title/Title");
var Tabs_1 = require("./components/Tabs/Tabs");
var Sorting_1 = require("./components/Sorting/Sorting");
var CardsSection_1 = require("./components/CardsSection/CardsSection");
function App() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Header_1["default"], null),
        react_1["default"].createElement(Title_1["default"], null),
        react_1["default"].createElement(Tabs_1["default"], null),
        react_1["default"].createElement(Sorting_1["default"], null),
        react_1["default"].createElement(CardsSection_1["default"], null)));
}
exports["default"] = App;
