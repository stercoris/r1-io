import {Router, RouterBuilder} from '@Router/IRouter';
import {buildFromJSXToVKKeyboard} from './buildFromJSXToVKKeyboard';
import 'vk-io';

const configureBuilder = <C extends Record<string, unknown>, E extends string>([
  name,
  config,
]: [E, RouterBuilder<C>]) => [
  name,
  {...config, build: buildFromJSXToVKKeyboard(config.build)},
];

const getTypeFixedRouterMap = <C extends {}, E extends string>(
  menuMap: BuildMenuMap<C, E>
) => Object.entries(menuMap) as [E, RouterBuilder<C>][];

export type RouterMenuMap<C, E extends string> = Record<E, Router<C>>;
export type BuildMenuMap<C, E extends string> = Record<E, RouterBuilder<C>>;

type MenuBuildersConfigurator = <C extends {}, E extends string>(
  menuMap: BuildMenuMap<C, E>
) => RouterMenuMap<C, E>;

export const configureMenuBuilders: MenuBuildersConfigurator = menuMap => {
  const rawMenus = getTypeFixedRouterMap(menuMap);
  const configuredMenusArray = rawMenus.map(configureBuilder);

  return Object.fromEntries(configuredMenusArray);
};
