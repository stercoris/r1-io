import { NextMiddleware } from "middleware-io";
import { MessageContext } from "vk-io";
export declare type IMiddleware<OutputContext> = (context: MessageContext, next: NextMiddleware) => Promise<OutputContext>;
//# sourceMappingURL=IMiddleware.d.ts.map