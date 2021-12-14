import {rowToButtonArrayConverter} from '@BuildVkKeyboard/rowConverter/rowConverter';
import {R1Node} from '@Factory/factory';
import {Keyboard, KeyboardBuilder} from 'vk-io';

export const menuToVkKeyboardBuilderConverter = (
  node: R1Node
): KeyboardBuilder => {
  if (node.type !== 'menu') {
    throw new Error('Only menu should be parsed to vk-io keyboard');
  }

  const rows = node.content as R1Node[];

  return Keyboard.keyboard(rows.map(rowToButtonArrayConverter));
};
