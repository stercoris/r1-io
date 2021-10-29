"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseButton = void 0;
const getFlatChildren_1 = require("./getFlatChildren");
const vk_io_1 = require("vk-io");
const parseButton = (_, props, ...children) => {
    const labelOrChild = props?.label ?? children.join("");
    const button = {
        label: (0, getFlatChildren_1.getFlatChilren)(labelOrChild),
        color: props?.color ?? vk_io_1.ButtonColor.PRIMARY,
        payload: props?.onClick,
    };
    return { type: "button", content: button };
};
exports.parseButton = parseButton;
//# sourceMappingURL=parser.js.map