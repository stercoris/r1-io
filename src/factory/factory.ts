/* eslint-disable @typescript-eslint/require-await */
import {parseFunctional} from '@Factory/elements/functional/parser';

const createBuilder =
  (name: string) =>
  (_: any, props: any, ...children: any[]) => ({
    type: name,
    props,
    content: children instanceof Array ? children.flat() : children,
  });

export const createElement = async (
  name: string | Function,
  props: any,
  ...children: any
) => {
  const standartName = typeof name === 'function' ? 'functional' : name;

  if (standartName === 'functional') {
    return parseFunctional(name, props, ...children);
  }

  const build = createBuilder(standartName);

  return build(name, props, ...children);
};
