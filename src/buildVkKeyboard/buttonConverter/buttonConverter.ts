import {R1Node} from '@Factory/factory';
import {IKeyboardProxyButton, Keyboard} from 'vk-io';

export const buttonToVkIoButtonConverter = (
  node: R1Node
): IKeyboardProxyButton => {
  if (node.type !== 'button') {
    throw new Error(
      "Only objects with type 'button' should be parsed to VKButton"
    );
  }
  return Keyboard.textButton(node.content as JSX.ButtonPayload);
};
