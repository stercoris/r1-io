"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseButton = void 0;
const vk_io_1 = require("vk-io");
const parseButton = (_, props, children) => {
    const button = {
        label: props?.label ?? children,
        color: props?.color ?? vk_io_1.ButtonColor.PRIMARY,
        payload: props?.onClick,
    };
    return { type: "button", content: button };
};
exports.parseButton = parseButton;
