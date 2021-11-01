"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRouter = void 0;
const addBuildersToRouterMap_1 = require("./helpers/configurations/addBuildersToRouterMap");
const getCurrentMenu_1 = require("./helpers/api/getCurrentMenu");
const createRouter = (menuMap, getMenuFromContext) => {
    const menusWithBuilders = (0, addBuildersToRouterMap_1.configureMenuBuilders)(menuMap);
    const getCurrentMenu = (0, getCurrentMenu_1.getCurrentMenuFabric)({
        getMenuFromContext,
        menus: menusWithBuilders,
    });
    return getCurrentMenu;
};
exports.createRouter = createRouter;
//# sourceMappingURL=Router.js.map