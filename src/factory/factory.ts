import {parseButton} from '@Factory/elements/button/parser';
import {parseFunctional} from '@Factory/elements/functional/parser';

export type ComponentType = 'row' | 'button' | 'functional' | 'menu';

export type ButtonNode = {type: 'button'; content: JSX.ButtonPayload};
export type ContentNode = {
  type: 'row' | 'functional' | 'menu';
  content: (ContentNode | ButtonNode)[];
};

export type R1Node = ContentNode | ButtonNode;

const create =
  (name: ComponentType) =>
  (_: any, __: any, ...children: any[]) => ({
    type: name,
    content: children instanceof Array ? children.flat() : children,
  });

export const createElement = async (
  name: ComponentType | Function,
  props: JSX.ButtonProps | null,
  ...children: R1Node[] | string[]
) => {
  const parsers = {
    button: parseButton,
    row: create('row'),
    menu: create('menu'),
    functional: parseFunctional,
  };

  const standartName = typeof name === 'function' ? 'functional' : name;
  const parser = parsers[standartName];

  return parser(name, props, ...children);
};
