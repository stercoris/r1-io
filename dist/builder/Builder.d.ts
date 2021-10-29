import { IBuilder } from "./IBuilder";
import R1IO from "../index";
declare type MenuConfig<C> = {
    build: R1IO.FC<C>;
    fallbackAction?: JSX.ActionPayload;
};
declare type EnumToMenu<C, E extends string> = Record<E, MenuConfig<C>>;
export declare const createBuilder: <C extends {}, E extends string>(menuMap: EnumToMenu<C, E>, getMenuFromContext: (context: C) => E) => IBuilder<C>;
export {};
//# sourceMappingURL=Builder.d.ts.map