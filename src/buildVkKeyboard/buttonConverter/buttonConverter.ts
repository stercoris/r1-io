import {R1Node} from '@Factory/factory';
import {
  IKeyboardProxyButton,
  IKeyboardTextButtonOptions,
  Keyboard,
} from 'vk-io';

export const buttonToVkIoButtonConverter = (
  node: R1Node
): IKeyboardProxyButton => {
  if (node.type !== 'button') {
    throw new Error(
      "Only objects with type 'button' should be parsed to VKButton"
    );
  }

  const content = node.content;

  const textButtonProps: IKeyboardTextButtonOptions = {
    label: content.label,
    color: content.color,
    payload: content.onClick,
  };

  return Keyboard.textButton(textButtonProps);
};
