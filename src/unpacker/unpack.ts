import { R1Node } from "@Factory/factory";
import { deleteFunctionalComponents } from "@Unpacker/deleteFunctionalComponents";
import { deepResolveContent } from "@Unpacker/getDeepResolved";

export const unpackContent = async (menu: R1Node): Promise<R1Node> =>
  deleteFunctionalComponents(await deepResolveContent(menu));
