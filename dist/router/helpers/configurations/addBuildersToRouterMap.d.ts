import { Router, RouterBuilder } from "../../IRouter";
import "vk-io";
export declare type RouterMenuMap<C, E extends string> = Record<E, Router<C>>;
export declare type BuildMenuMap<C, E extends string> = Record<E, RouterBuilder<C>>;
declare type MenuBuildersConfigurator = <C extends {}, E extends string>(menuMap: BuildMenuMap<C, E>) => RouterMenuMap<C, E>;
export declare const configureMenuBuilders: MenuBuildersConfigurator;
export {};
//# sourceMappingURL=addBuildersToRouterMap.d.ts.map