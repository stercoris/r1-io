// this is some unsafe shit, but no other way :sadface:

import { R1Node } from "@Factory/factory";
//@ts-ignore
import promisePropsRecursive from "promise-props-recursive";

export const deepResolveContent = async (
  objectWithPromiseChain: R1Node
): Promise<R1Node> =>
  //@ts-ignore
  await promisePropsRecursive(objectWithPromiseChain)[0];
