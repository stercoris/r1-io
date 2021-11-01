import { BuildKeyboard, IRouter, RouterBuilder, Router } from "@Router/IRouter";
import { nodeToVkIoKeyboard } from "@BuildVkKeyboard/nodeToVkIoKeyboard";
import { R1Node } from "@Factory/factory";
import { unpackContent } from "@Unpacker/unpack";

type EnumToMenu<C, E extends string> = Record<E, RouterBuilder<C>>;

const buildKeyboardAndConvertToKeyboardBuilder =
  (buildNode: Function) =>
  async (...args: unknown[]) => {
    const unresolvedNode = buildNode(...args) as R1Node;
    return nodeToVkIoKeyboard(await unpackContent(unresolvedNode));
  };

export const createRouter = <C extends {}, E extends string>(
  menuMap: EnumToMenu<C, E>,
  getMenuFromContext: (context: C) => E
): IRouter<C> => {
  const getCurrentMenu: IRouter<C> = (context: C) => {
    const userCurrentMenu = getMenuFromContext(context);

    for (const [name, menu] of Object.entries<RouterBuilder<C>>(menuMap)) {
      if (userCurrentMenu === name) {
        const menuConf: Router<C> = {
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
