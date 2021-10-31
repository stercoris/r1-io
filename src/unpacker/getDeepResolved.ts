// this is some unsafe shit, but no other way :sadface:

import { R1Node } from "@Factory/factory";

//@ts-ignore
import { resolveNestedPromises } from "./promise-resolve-deep";

export const deepResolveContent = (
  objectWithPromiseChain: R1Node
): Promise<R1Node> =>
  resolveNestedPromises(objectWithPromiseChain, undefined, -1);
