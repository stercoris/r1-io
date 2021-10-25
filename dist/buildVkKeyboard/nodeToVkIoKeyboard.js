"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeToVkIoKeyboard = void 0;
const vk_io_1 = require("vk-io");
const getRow = (node) => node.content.map((n) => vk_io_1.Keyboard.textButton(n.content));
const nodeToVkIoKeyboard = (node) => {
    if (node.type !== "menu") {
        throw new Error("Only menu should be parsed to vk-io keyboard");
    }
    const rows = node.content;
    return vk_io_1.Keyboard.keyboard(rows.map(getRow));
};
exports.nodeToVkIoKeyboard = nodeToVkIoKeyboard;
