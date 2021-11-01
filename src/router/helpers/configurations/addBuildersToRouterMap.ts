import { Router, RouterBuilder } from "@Router/IRouter";
import { buildFromJSXToVKKeyboard } from "./buildFromJSXToVKKeyboard";

export type RouterMenuMap<C, E extends string> = Record<E, Router<C>>;
export type BuildMenuMap<C, E extends string> = Record<E, RouterBuilder<C>>;

export const configureMenuBuilders = <C extends {}, E extends string>(
  menuMap: BuildMenuMap<C, E>
) =>
  Object.entries<RouterBuilder<C>>(menuMap).reduce(
    (previous, [menuName, menuConfig]) => ({
      ...previous,
      [menuName as keyof E]: {
        ...menuConfig,
        build: buildFromJSXToVKKeyboard(menuConfig.build),
      },
    }),
    {} as RouterMenuMap<C, E>
  );
