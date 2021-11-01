import { RouterMenuMap } from "../configurations/addBuildersToRouterMap";
interface GetCurrentMenuProps<C extends {}, E extends string> {
    menus: RouterMenuMap<C, E>;
    getMenuFromContext: (context: C) => E;
}
declare type GetCurrentMenuFabric = <C extends {}, E extends string>(props: GetCurrentMenuProps<C, E>) => (context: C) => RouterMenuMap<C, E>[E];
export declare const getCurrentMenuFabric: GetCurrentMenuFabric;
export {};
//# sourceMappingURL=getCurrentMenu.d.ts.map