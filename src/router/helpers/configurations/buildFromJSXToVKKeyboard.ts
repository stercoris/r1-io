import {menuToVkKeyboardBuilderConverter} from '@BuildVkKeyboard/menuConverter/menuConverter';
import {R1Node} from '@Factory/factory';
import {unpackContent} from '@Unpacker/unpack';
import 'vk-io';

export const buildFromJSXToVKKeyboard =
  (buildNode: Function) =>
  async (...args: unknown[]) => {
    const unresolvedNode = buildNode(...args) as R1Node;
    return menuToVkKeyboardBuilderConverter(
      await unpackContent(unresolvedNode)
    );
  };
