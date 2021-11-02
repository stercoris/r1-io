import { IRouter } from "../router/IRouter";
import { IMiddleware } from "./IMiddleware";
declare type MiddlewareCreator = <JSXComponentProps, OutputContext extends JSXComponentProps = JSXComponentProps>(getCurrentMenu: IRouter<JSXComponentProps>, contextWorker: IMiddleware<OutputContext>) => IMiddleware<OutputContext>;
export declare const createMiddleware: MiddlewareCreator;
export {};
//# sourceMappingURL=Middleware.d.ts.map