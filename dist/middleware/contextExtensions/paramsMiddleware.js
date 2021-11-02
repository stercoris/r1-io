"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncAttachToContext = exports.asyncAttachToContext = void 0;
const asyncAttachToContext = (fieldName, field, context) => {
    const oldFunc = context[fieldName];
    context[fieldName] = async (...args) => {
        const newArgs = await field(...args);
        return await oldFunc.bind(context)(...newArgs);
    };
};
exports.asyncAttachToContext = asyncAttachToContext;
const syncAttachToContext = (fieldName, field, context) => {
    const oldFunc = context[fieldName];
    context[fieldName] = (...args) => {
        const newArgs = field(...args);
        return oldFunc.bind(context)(...newArgs);
    };
};
exports.syncAttachToContext = syncAttachToContext;
//# sourceMappingURL=paramsMiddleware.js.map