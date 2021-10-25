"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFunctional = void 0;
const parseFunctional = (func, props, ...children) => {
    const content = func instanceof Function ? func({ children, ...props }) : children;
    return { type: "functional", content };
};
exports.parseFunctional = parseFunctional;
//# sourceMappingURL=parser.js.map