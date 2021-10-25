import { parseButton } from "./elements/button/parser";
import { parseFunctional } from "./elements/functional/parser";

export type ComponentType = "row" | "button" | "functional" | "menu";

export type R1Node = {
  type: ComponentType;
  content: R1Node[] | JSX.ButtonPayload;
};

const create =
  (name: ComponentType) =>
  (_: any, __: any, ...children: any[]) => ({ type: name, content: children });

export const createElement = async (
  name: ComponentType | Function,
  props: JSX.ButtonProps | null,
  ...children: R1Node[] | string[]
) => {
  const parsers = {
    button: parseButton,
    row: create("row"),
    menu: create("menu"),
    functional: parseFunctional,
  };

  const standartName = typeof name === "function" ? "functional" : name;
  const parser = parsers[standartName];

  return parser(name, props, ...children);
};
