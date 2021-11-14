import {RouterMenuMap} from '../configurations/addBuildersToRouterMap';

interface GetCurrentMenuProps<C extends {}, E extends string> {
  menus: RouterMenuMap<C, E>;
  getMenuFromContext: (context: C) => E;
}

type GetCurrentMenuFabric = <C extends {}, E extends string>(
  props: GetCurrentMenuProps<C, E>
) => (context: C) => RouterMenuMap<C, E>[E];

export const getCurrentMenuFabric: GetCurrentMenuFabric =
  ({getMenuFromContext, menus}) =>
  context => {
    const userCurrentMenu = getMenuFromContext(context);

    const currentMenuConfig = menus[userCurrentMenu];

    if (!currentMenuConfig) {
      throw new Error(`Menu ${userCurrentMenu} not found`);
    }

    return currentMenuConfig;
  };
