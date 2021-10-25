import {
  BuildKeyboard,
  IBuilder,
  MiddlewareMenuConfig,
} from "builder/IBuilder";
import { nodeToVkIoKeyboard } from "buildVkKeyboard/nodeToVkIoKeyboard";
import { R1Node } from "factory/factory";
import { unpackContent } from "unpacker/unpack";

type MenuConfig<C> = {
  build: React.FC<C>;
  onFalldown?: JSX.ActionPayload;
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
