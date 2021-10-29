import {
  BuildKeyboard,
  IBuilder,
  MiddlewareMenuConfig,
} from "@Builder/IBuilder";
import { nodeToVkIoKeyboard } from "@BuildVkKeyboard/nodeToVkIoKeyboard";
import { R1Node } from "@Factory/factory";
import { unpackContent } from "@Unpacker/unpack";
import R1IO from "@Root";

type MenuConfig<C> = {
  build: R1IO.FC<C>;
  fallbackAction?: JSX.ActionPayload;
};

type EnumToMenu<C, E extends string> = Record<E, MenuConfig<C>>;

const buildKeyboardAndConvertToKeyboardBuilder =
  (buildNode: Function) =>
  async (...args: unknown[]) => {
    const unresolvedNode = buildNode(...args) as R1Node;
    return nodeToVkIoKeyboard(await unpackContent(unresolvedNode));
  };

export const createBuilder = <C extends {}, E extends string>(
  menuMap: EnumToMenu<C, E>,
  getMenuFromContext: (context: C) => E
): IBuilder<C> => {
  const getCurrentMenu: IBuilder<C> = (context: C) => {
    const userCurrentMenu = getMenuFromContext(context);

    for (const [name, menu] of Object.entries<MenuConfig<C>>(menuMap)) {
      if (userCurrentMenu === name) {
        const menuConf: MiddlewareMenuConfig<C> = {
          ...menu,
          build: buildKeyboardAndConvertToKeyboardBuilder(
            menu.build
          ) as BuildKeyboard<C>,
        };
        return menuConf;
      }
    }

    throw new Error("MENU NOT FOUND");
  };
  return getCurrentMenu;
};
