import type {Button} from '@BuildVkKeyboard/buttonConverter/buttonConverter';
import {buttonToVkIoButtonConverter} from '@BuildVkKeyboard/buttonConverter/buttonConverter';
import type {IKeyboardProxyButton} from 'vk-io';

export type Row = {
  type: 'row';
  props: JSX.RowProps;
  content: Button[];
};

export const rowToButtonArrayConverter = (
  node: Row
): IKeyboardProxyButton[] => {
  if (node.type !== 'row') {
    throw new Error("Only objects with type 'row' should be parsed to VKRow");
  }
  return node.content.map(buttonToVkIoButtonConverter);
};
