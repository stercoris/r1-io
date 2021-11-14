import {IRouter} from '@Router/IRouter';
import {
  BuildMenuMap,
  configureMenuBuilders,
} from './helpers/configurations/addBuildersToRouterMap';
import {getCurrentMenuFabric} from './helpers/api/getCurrentMenu';

type RouterCreator = <C extends {}, E extends string>(
  menuMap: BuildMenuMap<C, E>,
  getMenuFromContext: (context: C) => E
) => IRouter<C>;

export const createRouter: RouterCreator = (menuMap, getMenuFromContext) => {
  const menusWithBuilders = configureMenuBuilders(menuMap);

  const getCurrentMenuConfig = getCurrentMenuFabric({
    getMenuFromContext,
    menus: menusWithBuilders,
  });

  return getCurrentMenuConfig;
};
