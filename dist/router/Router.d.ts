import { IRouter } from "./IRouter";
import { BuildMenuMap } from "./helpers/configurations/addBuildersToRouterMap";
declare type RouterCreator = <C extends {}, E extends string>(menuMap: BuildMenuMap<C, E>, getMenuFromContext: (context: C) => E) => IRouter<C>;
export declare const createRouter: RouterCreator;
export {};
//# sourceMappingURL=Router.d.ts.map