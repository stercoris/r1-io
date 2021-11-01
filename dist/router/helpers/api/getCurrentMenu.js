"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentMenuFabric = void 0;
const getCurrentMenuFabric = ({ getMenuFromContext, menus }) => (context) => {
    const userCurrentMenu = getMenuFromContext(context);
    const currentMenuConfig = menus[userCurrentMenu];
    if (!currentMenuConfig) {
        throw new Error(`Menu ${userCurrentMenu} not found`);
    }
    return currentMenuConfig;
};
exports.getCurrentMenuFabric = getCurrentMenuFabric;
//# sourceMappingURL=getCurrentMenu.js.map