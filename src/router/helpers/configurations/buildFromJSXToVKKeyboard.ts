import {
  Menu,
  menuToVkKeyboardBuilderConverter,
} from '@BuildVkKeyboard/menuConverter/menuConverter';
import {deleteFunctionalComponents} from '@Unpacker/deleteFunctionalComponents';
import {promiseDeepResolve} from 'promise-deep-resolve-ts';
import 'vk-io';

export const buildFromJSXToVKKeyboard =
  (buildNode: Function) =>
  async (...args: unknown[]) => {
    const unresolvedNode = buildNode(...args) as Menu;

    const resolvedJSX = await promiseDeepResolve(unresolvedNode);

    // TODO:pls add typization
    const jsxWithoutFunctional = deleteFunctionalComponents(
      // @ts-ignore
      resolvedJSX
    ) as unknown as Menu;

    return menuToVkKeyboardBuilderConverter(jsxWithoutFunctional);
  };
