import { R1Node } from "@Factory/factory";
import { ButtonColor } from "vk-io";

export type Button = JSX.ButtonProps;

export type CreateButton = (
  name: "button",
  props: Button | null,
  ...children: string[]
) => R1Node;

export const parseButton: CreateButton = (_, props, children) => {
  // base button component

  const button: JSX.ButtonPayload = {
    label: props?.label ?? children,
    color: props?.color ?? ButtonColor.PRIMARY,
    payload: props?.onClick,
  };

  return { type: "button", content: button };
};
