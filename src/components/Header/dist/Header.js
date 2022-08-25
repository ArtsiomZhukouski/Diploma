"use strict";
exports.__esModule = true;
var Search_1 = require("../Search/Search");
var User_1 = require("../User/User");
require("./Header.css");
var HeaderSection = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'header-style' },
            React.createElement("img", { className: 'logo-style', src: "/images/Logo.png", alt: "" }),
            React.createElement(Search_1["default"], null),
            React.createElement(User_1["default"], null))));
};
exports["default"] = HeaderSection;
