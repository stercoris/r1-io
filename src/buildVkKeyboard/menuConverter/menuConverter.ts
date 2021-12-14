import {
  Row,
  rowToButtonArrayConverter,
} from '@BuildVkKeyboard/rowConverter/rowConverter';
import {Keyboard, KeyboardBuilder} from 'vk-io';

export type Menu = {
  type: 'menu';
  props: JSX.MenuProps;
  content: Row[];
};

export const menuToVkKeyboardBuilderConverter = (
  menu: Menu
): KeyboardBuilder => {
  if (menu.type !== 'menu') {
    throw new Error('Only menu should be parsed to vk-io keyboard');
  }

  return Keyboard.keyboard(menu.content.map(rowToButtonArrayConverter));
};
