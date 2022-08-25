"use strict";
exports.__esModule = true;
require("./Sorting.css");
var SortingSection = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'sorting-style' },
            React.createElement("div", { className: 'sorting-item-style' },
                React.createElement("button", { className: 'sorting-button-style' }, "Day"),
                React.createElement("button", { className: 'sorting-button-style' }, "Week"),
                React.createElement("button", { className: 'sorting-button-style' }, "Month"),
                React.createElement("button", { className: 'sorting-button-style' }, "Year")),
            React.createElement("div", { className: 'sorting-select-style' }, "Sort"))));
};
exports["default"] = SortingSection;
