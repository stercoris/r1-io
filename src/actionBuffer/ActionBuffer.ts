import { IAction, ParameterizedAction, SimpleAction } from "@Action/iAction";
import { FindAndCall, IActionBuffer } from "@ActionBuffer/IActionBuffer";

export const createActionBuffer = <InternalContext>(
  ...actions: IAction<InternalContext, any>[]
): IActionBuffer<InternalContext> => {
  const findAndCall: FindAndCall<InternalContext> = async (
    payload,
    { context, builderContext }
  ) => {
    if (!payload) {
      return "PayloadNotFound";
    }

    const { name, type, params } = payload;

    const action = actions.find((a) => a.name === name);

    if (!action) {
      await context.send("Fallback couse no action was found");
      return "ActionNotFound";
    }

    if (type === "parameterizedAction") {
      const parameterizedAction = action.do as ParameterizedAction<
        any,
        InternalContext
      >;
      await parameterizedAction(params, context, builderContext);
    } else {
      const simpleAction = action.do as SimpleAction<InternalContext>;
      await simpleAction(context, builderContext);
    }

    return "ActionExecuted";
  };

  return { findAndCall };
};
