import { Router, RouterBuilder } from "../IRouter";
export declare type RouterMenuMap<C, E extends string> = Record<E, Router<C>>;
export declare type BuildMenuMap<C, E extends string> = Record<E, RouterBuilder<C>>;
export declare const configureMenuBuilders: <C extends {}, E extends string>(menuMap: BuildMenuMap<C, E>) => RouterMenuMap<C, E>;
//# sourceMappingURL=addBuildersToRouterMap.d.ts.map