import { IBuilder } from "builder/IBuilder";
import { IMiddleware } from "middleware/IMiddleware";
export declare const createMiddleware: <JSXComponentProps, OutputContext extends JSXComponentProps = JSXComponentProps>(getCurrentMenu: IBuilder<JSXComponentProps>, contextWorker: IMiddleware<OutputContext>) => IMiddleware<OutputContext>;
//# sourceMappingURL=Middleware.d.ts.map