"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createElement = void 0;
const parser_1 = require("./elements/button/parser");
const parser_2 = require("./elements/functional/parser");
const create = (name) => (_, __, ...children) => ({ type: name, content: children });
const createElement = async (name, props, ...children) => {
    const parsers = {
        button: parser_1.parseButton,
        row: create("row"),
        menu: create("menu"),
        functional: parser_2.parseFunctional,
    };
    const standartName = typeof name === "function" ? "functional" : name;
    const parser = parsers[standartName];
    return parser(name, props, ...children);
};
exports.createElement = createElement;
//# sourceMappingURL=factory.js.map