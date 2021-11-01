import { R1Node } from "@Factory/factory";
import { IKeyboardProxyButton, Keyboard, KeyboardBuilder } from "vk-io";

const getButton = (node: R1Node): IKeyboardProxyButton => {
  if (node.type !== "button") {
    throw new Error(
      "Only objects with type 'button' should be parsed to VKButton"
    );
  }
  return Keyboard.textButton(node.content as JSX.ButtonPayload);
};

const getRow = (node: R1Node): IKeyboardProxyButton[] => {
  if (node.type !== "row") {
    throw new Error("Only objects with type 'row' should be parsed to VKRow");
  }
  return (node.content as R1Node[]).map(getButton);
};

export const nodeToVkIoKeyboard = (node: R1Node): KeyboardBuilder => {
  if (node.type !== "menu") {
    throw new Error("Only menu should be parsed to vk-io keyboard");
  }

  const rows = node.content as R1Node[];

  return Keyboard.keyboard(rows.map(getRow));
};
