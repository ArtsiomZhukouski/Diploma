"use strict";
exports.__esModule = true;
require("./Card.css");
var CardPostSection = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'card-style' },
            React.createElement("div", { className: 'image-style' },
                React.createElement("img", { src: './images/ContentImage.jpg', alt: "" })),
            React.createElement("div", { className: 'content-style' },
                React.createElement("p", { className: 'content-date' }, "April 20, 2021"),
                "Astronauts prep for new solar arrays on nearly seven-hour spacewalk"))));
};
exports["default"] = CardPostSection;
