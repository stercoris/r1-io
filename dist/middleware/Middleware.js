"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMiddleware = void 0;
const createAction_1 = require("action/createAction");
const send_1 = require("middleware/contextExtensions/send/send");
const ActionBuffer_1 = require("actionBuffer/ActionBuffer");
const createMiddleware = (getCurrentMenu, contextWorker) => {
    const actionsBuffer = (0, ActionBuffer_1.createActionBuffer)(...createAction_1.actions);
    const middleware = async (context, next) => {
        const builderContext = await contextWorker(context, next);
        const contextBundle = {
            context,
            builderContext,
        };
        const getCurrentMenuAndBuildKeyboard = (context) => getCurrentMenu(context).build(context);
        (0, send_1.applyCustomSend)(getCurrentMenuAndBuildKeyboard, contextBundle);
        console.log(context.messagePayload);
        const actionStatus = await actionsBuffer.findAndCall(context.messagePayload, contextBundle);
        const { falldownAction } = getCurrentMenu(builderContext);
        if (actionStatus === "PayloadNotFound") {
            if (falldownAction)
                await actionsBuffer.findAndCall(falldownAction, contextBundle);
            else
                await context.send("Fallback couse no payload was found");
        }
        return builderContext;
    };
    return middleware;
};
exports.createMiddleware = createMiddleware;
//# sourceMappingURL=Middleware.js.map