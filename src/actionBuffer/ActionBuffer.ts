import { IAction, ParameterizedAction, SimpleAction } from "@Action/iAction";
import { FindAndCall, IActionBuffer } from "@ActionBuffer/IActionBuffer";
import { findAndCallApi } from "./api/findAndCall";

type ActionBufferCreator = <InternalContext>(
  ...actions: IAction<InternalContext, any>[]
) => IActionBuffer<InternalContext>;

export const createActionBuffer: ActionBufferCreator = (...actions) => {
  const findAndCall = findAndCallApi({ actions });
  return { findAndCall };
};
