import { IActionBuffer } from "../../actionBuffer/IActionBuffer";
import { IMiddleware } from "../IMiddleware";
import { IRouter } from "../../router/IRouter";
interface MiddlewareConfiguratorProps<JSXComponentProps, OutputContext extends JSXComponentProps = JSXComponentProps> {
    getCurrentMenu: IRouter<JSXComponentProps>;
    applyUserMiddleware: IMiddleware<OutputContext>;
    actions: IActionBuffer<any>;
}
declare type MiddlewareConfigurator = <JSXComponentProps, OutputContext extends JSXComponentProps = JSXComponentProps>(p: MiddlewareConfiguratorProps<JSXComponentProps, OutputContext>) => IMiddleware<OutputContext>;
export declare const createMiddlewareConfigurator: MiddlewareConfigurator;
export {};
//# sourceMappingURL=configureMiddleware.d.ts.map