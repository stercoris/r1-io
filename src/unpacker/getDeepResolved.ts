// this is some unsafe shit, but no other way :sadface:

import { R1Node } from "@Factory/factory";

//@ts-ignore
require("promise-resolve-deep")(Promise);

export const deepResolveContent = async (
  objectWithPromiseChain: R1Node
): Promise<R1Node> =>
  //@ts-ignore
  Promise.resolveDeep(objectWithPromiseChain);
