import { KeyboardBuilder } from "vk-io";
export declare type BuildKeyboard<C> = (context: C) => Promise<KeyboardBuilder>;
export declare type MiddlewareMenuConfig<C> = {
    build: BuildKeyboard<C>;
    fallbackAction?: JSX.ActionPayload;
};
export declare type IBuilder<C> = (context: C) => MiddlewareMenuConfig<C>;
//# sourceMappingURL=IBuilder.d.ts.map