import { IRouter } from "../router/IRouter";
import { IMiddleware } from "./IMiddleware";
export declare const createMiddleware: <JSXComponentProps, OutputContext extends JSXComponentProps = JSXComponentProps>(getCurrentMenu: IRouter<JSXComponentProps>, contextWorker: IMiddleware<OutputContext>) => IMiddleware<OutputContext>;
//# sourceMappingURL=Middleware.d.ts.map