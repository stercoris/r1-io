"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureMenuBuilders = void 0;
const buildFromJSXToVKKeyboard_1 = require("./buildFromJSXToVKKeyboard");
require("vk-io");
const configureBuilder = ([name, config]) => [name, { ...config, build: (0, buildFromJSXToVKKeyboard_1.buildFromJSXToVKKeyboard)(config.build) }];
const getTypeFixedRouterMap = (menuMap) => Object.entries(menuMap);
const configureMenuBuilders = (menuMap) => {
    const rawMenus = getTypeFixedRouterMap(menuMap);
    const configuredMenusArray = rawMenus.map(configureBuilder);
    return Object.fromEntries(configuredMenusArray);
};
exports.configureMenuBuilders = configureMenuBuilders;
//# sourceMappingURL=addBuildersToRouterMap.js.map