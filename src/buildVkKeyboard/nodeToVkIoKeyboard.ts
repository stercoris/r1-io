import { R1Node } from "@Factory/factory";
import { IKeyboardProxyButton, Keyboard, KeyboardBuilder } from "vk-io";

const getRow = (node: R1Node): IKeyboardProxyButton[] =>
  (node.content as R1Node[]).map((n) =>
    Keyboard.textButton(n.content as JSX.ButtonPayload)
  );

export const nodeToVkIoKeyboard = (node: R1Node): KeyboardBuilder => {
  if (node.type !== "menu") {
    throw new Error("Only menu should be parsed to vk-io keyboard");
  }

  const rows = node.content as R1Node[];

  return Keyboard.keyboard(rows.map(getRow));
};
