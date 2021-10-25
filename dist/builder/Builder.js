"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBuilder = void 0;
const nodeToVkIoKeyboard_1 = require("../buildVkKeyboard/nodeToVkIoKeyboard");
const unpack_1 = require("../unpacker/unpack");
const buildKeyboardAndConvertToKeyboardBuilder = (buildNode) => async (...args) => {
    const unresolvedNode = buildNode(...args);
    return (0, nodeToVkIoKeyboard_1.nodeToVkIoKeyboard)(await (0, unpack_1.unpackContent)(unresolvedNode));
};
const createBuilder = (menuMap, getMenuFromContext) => {
    const getCurrentMenu = (context) => {
        const userCurrentMenu = getMenuFromContext(context);
        for (const [name, menu] of Object.entries(menuMap)) {
            if (userCurrentMenu === name) {
                const menuConf = {
                    ...menu,
                    build: buildKeyboardAndConvertToKeyboardBuilder(menu.build),
                };
                return menuConf;
            }
        }
        throw new Error("MENU NOT FOUND");
    };
    return getCurrentMenu;
};
exports.createBuilder = createBuilder;
//# sourceMappingURL=Builder.js.map