"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeToVkIoKeyboard = void 0;
const vk_io_1 = require("vk-io");
const getButton = (node) => {
    if (node.type !== "button") {
        throw new Error("Only objects with type 'button' should be parsed to VKButton");
    }
    return vk_io_1.Keyboard.textButton(node.content);
};
const getRow = (node) => {
    if (node.type !== "row") {
        throw new Error("Only objects with type 'row' should be parsed to VKRow");
    }
    return node.content.map(getButton);
};
const nodeToVkIoKeyboard = (node) => {
    if (node.type !== "menu") {
        throw new Error("Only menu should be parsed to vk-io keyboard");
    }
    const rows = node.content;
    return vk_io_1.Keyboard.keyboard(rows.map(getRow));
};
exports.nodeToVkIoKeyboard = nodeToVkIoKeyboard;
//# sourceMappingURL=nodeToVkIoKeyboard.js.map