"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createActionBuffer = void 0;
const createActionBuffer = (...actions) => {
    const findAndCall = async (payload, { context, builderContext }) => {
        if (!payload) {
            return "PayloadNotFound";
        }
        const { name, type, params } = payload;
        const action = actions.find((a) => a.name === name);
        if (!action) {
            await context.send("Fallback couse no action was found");
            return "ActionNotFound";
        }
        if (type === "parameterizedAction") {
            const parameterizedAction = action.do;
            await parameterizedAction(params, context, builderContext);
        }
        else {
            const simpleAction = action.do;
            await simpleAction(context, builderContext);
        }
        return "ActionExecuted";
    };
    return { findAndCall };
};
exports.createActionBuffer = createActionBuffer;
//# sourceMappingURL=ActionBuffer.js.map