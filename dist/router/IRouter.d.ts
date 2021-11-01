import { KeyboardBuilder } from "vk-io";
export declare type BuildKeyboard<C> = (context: C) => Promise<KeyboardBuilder>;
export interface BaseRouter {
    fallbackAction?: JSX.ActionPayload;
}
export interface Router<C> extends BaseRouter {
    build: BuildKeyboard<C>;
}
export interface RouterBuilder<C> extends BaseRouter {
    build: R1IO.FC<C>;
}
export declare type IRouter<C> = (context: C) => Router<C>;
//# sourceMappingURL=IRouter.d.ts.map