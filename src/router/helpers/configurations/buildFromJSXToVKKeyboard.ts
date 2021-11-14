import {nodeToVkIoKeyboard} from '@BuildVkKeyboard/nodeToVkIoKeyboard';
import {R1Node} from '@Factory/factory';
import {unpackContent} from '@Unpacker/unpack';
import 'vk-io';

export const buildFromJSXToVKKeyboard =
  (buildNode: Function) =>
  async (...args: unknown[]) => {
    const unresolvedNode = buildNode(...args) as R1Node;
    return nodeToVkIoKeyboard(await unpackContent(unresolvedNode));
  };
