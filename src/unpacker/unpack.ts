import { R1Node } from "@Factory/factory";
import { deleteFunctionalComponents } from "@Unpacker/deleteFunctionalComponents";
import { promiseDeepResolve } from "promise-deep-resolve-ts";

export const unpackContent = async (menu: R1Node): Promise<R1Node> =>
  deleteFunctionalComponents(await promiseDeepResolve(menu));
