import {buttonToVkIoButtonConverter} from '@BuildVkKeyboard/buttonConverter/buttonConverter';
import {R1Node} from '@Factory/factory';
import {IKeyboardProxyButton} from 'vk-io';

export const rowToButtonArrayConverter = (
  node: R1Node
): IKeyboardProxyButton[] => {
  if (node.type !== 'row') {
    throw new Error("Only objects with type 'row' should be parsed to VKRow");
  }
  return (node.content as R1Node[]).map(buttonToVkIoButtonConverter);
};
