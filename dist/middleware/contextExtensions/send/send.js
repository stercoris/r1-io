"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyCustomSend = void 0;
const applyCustomSend = (build, { builderContext, context }) => {
    const oldSend = context.send;
    context.send = async (text) => {
        const keyboard = await build(builderContext);
        const params = { keyboard };
        return await oldSend.bind(context)(text, params);
    };
};
exports.applyCustomSend = applyCustomSend;
