import { IAction } from "@Action/iAction";
import { IActionBuffer } from "@ActionBuffer/IActionBuffer";
import { addActionApi } from "./api/addAction";
import { findAndCallApi } from "./api/findAndCall";
import { isActionAlreadyExistsApi } from "./api/isActionAlreadyExists";

type ActionBufferCreator = <InternalContext>(
  ...actions: IAction<InternalContext, any>[]
) => IActionBuffer<InternalContext>;

export const createActionBuffer: ActionBufferCreator = (...actions) => {
  const internalActions = actions;

  const findAndCall = findAndCallApi({ actions: internalActions });
  const addAction = addActionApi({ actions: internalActions });
  const isActionAlreadyExists = isActionAlreadyExistsApi({
    actions: internalActions,
  });

  return {
    findAndCall,
    addAction,
    isActionAlreadyExists,
  };
};
