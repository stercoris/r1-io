"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureMenuBuilders = void 0;
const buildFromJSXToVKKeyboard_1 = require("./buildFromJSXToVKKeyboard");
const configureMenuBuilders = (menuMap) => Object.entries(menuMap).reduce((previous, [menuName, menuConfig]) => ({
    ...previous,
    [menuName]: {
        ...menuConfig,
        build: (0, buildFromJSXToVKKeyboard_1.buildFromJSXToVKKeyboard)(menuConfig.build),
    },
}), {});
exports.configureMenuBuilders = configureMenuBuilders;
//# sourceMappingURL=addBuildersToRouterMap.js.map