import { MessageContext } from "vk-io";
import { AsyncParamsMiddlewareFunc, SuncParamsMiddlewareFunc } from "./IParamsMiddleware";
export declare const asyncAttachToContext: (fieldName: string, field: AsyncParamsMiddlewareFunc, context: MessageContext) => void;
export declare const syncAttachToContext: (fieldName: string, field: SuncParamsMiddlewareFunc, context: MessageContext) => void;
//# sourceMappingURL=paramsMiddleware.d.ts.map