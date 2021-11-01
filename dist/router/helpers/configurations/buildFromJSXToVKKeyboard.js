"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildFromJSXToVKKeyboard = void 0;
const nodeToVkIoKeyboard_1 = require("../../../buildVkKeyboard/nodeToVkIoKeyboard");
const unpack_1 = require("../../../unpacker/unpack");
require("vk-io");
const buildFromJSXToVKKeyboard = (buildNode) => async (...args) => {
    const unresolvedNode = buildNode(...args);
    return (0, nodeToVkIoKeyboard_1.nodeToVkIoKeyboard)(await (0, unpack_1.unpackContent)(unresolvedNode));
};
exports.buildFromJSXToVKKeyboard = buildFromJSXToVKKeyboard;
//# sourceMappingURL=buildFromJSXToVKKeyboard.js.map