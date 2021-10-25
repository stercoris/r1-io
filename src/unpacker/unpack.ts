import { R1Node } from "factory/factory";
import { deleteFunctionalComponents } from "unpacker/deleteFunctionalComponents";
import { deepResolveContent } from "unpacker/getDeepResolved";

export const unpackContent = async (menu: R1Node): Promise<R1Node> =>
  deleteFunctionalComponents(await deepResolveContent(menu));
