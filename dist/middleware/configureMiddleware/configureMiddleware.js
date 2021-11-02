"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMiddlewareConfigurator = void 0;
const paramsMiddleware_1 = require("../contextExtensions/paramsMiddleware");
const send_1 = require("../contextExtensions/send/send");
const createMiddlewareConfigurator = ({ getCurrentMenu, applyUserMiddleware, actions }) => async (context, next) => {
    const builderContext = await applyUserMiddleware(context, next);
    const findAndCallAction = (payload) => actions.findAndCall(payload, { builderContext, context });
    if (!builderContext)
        return;
    const getCurrentMenuAndBuildKeyboard = () => getCurrentMenu(builderContext).build(builderContext);
    const customSendBuilded = (0, send_1.customSend)({
        buildKeyboard: getCurrentMenuAndBuildKeyboard,
    });
    (0, paramsMiddleware_1.asyncAttachToContext)("send", customSendBuilded, context);
    const actionStatus = await findAndCallAction(context.messagePayload);
    if (actionStatus === "PayloadNotFound") {
        const { fallbackAction } = getCurrentMenu(builderContext);
        if (fallbackAction)
            findAndCallAction(fallbackAction);
    }
    return builderContext;
};
exports.createMiddlewareConfigurator = createMiddlewareConfigurator;
//# sourceMappingURL=configureMiddleware.js.map