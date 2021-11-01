import { IRouter, RouterBuilder } from "./IRouter";
declare type EnumToMenu<C, E extends string> = Record<E, RouterBuilder<C>>;
export declare const createRouter: <C extends {}, E extends string>(menuMap: EnumToMenu<C, E>, getMenuFromContext: (context: C) => E) => IRouter<C>;
export {};
//# sourceMappingURL=Router.d.ts.map