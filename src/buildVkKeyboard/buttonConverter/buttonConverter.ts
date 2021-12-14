import {
  IKeyboardProxyButton,
  IKeyboardTextButtonOptions,
  Keyboard,
} from 'vk-io';

export type Button = {
  type: 'button';
  props: JSX.ButtonProps;
  content: string[];
};

export const buttonToVkIoButtonConverter = ({
  props,
  content,
  type,
}: Button): IKeyboardProxyButton => {
  if (type !== 'button') {
    throw new Error(
      "Only objects with type 'button' should be parsed to VKButton"
    );
  }

  const labelOrChild = props?.label ?? content.join('');

  const textButtonProps: IKeyboardTextButtonOptions = {
    label: labelOrChild,
    color: props.color,
    payload: props.onClick,
  };

  return Keyboard.textButton(textButtonProps);
};
