"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMiddleware = void 0;
const createAction_1 = require("../action/createAction");
const ActionBuffer_1 = require("../actionBuffer/ActionBuffer");
const configureMiddleware_1 = require("./configureMiddleware/configureMiddleware");
const createMiddleware = (getCurrentMenu, contextWorker) => {
    const actionsBuffer = (0, ActionBuffer_1.createActionBuffer)(...createAction_1.actions);
    return (0, configureMiddleware_1.createMiddlewareConfigurator)({
        actions: actionsBuffer,
        applyUserMiddleware: contextWorker,
        getCurrentMenu: getCurrentMenu,
    });
};
exports.createMiddleware = createMiddleware;
//# sourceMappingURL=Middleware.js.map