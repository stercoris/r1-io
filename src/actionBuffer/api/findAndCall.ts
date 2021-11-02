import { IAction, ParameterizedAction, SimpleAction } from "@Action/iAction";
import { FindAndCall } from "@ActionBuffer/IActionBuffer";

interface FindAndCallCreatorProps<InternalContext> {
  actions: IAction<InternalContext, any>[];
}

type FindAndCallCreator = <InternalContext>(
  actions: FindAndCallCreatorProps<InternalContext>
) => FindAndCall<InternalContext>;

export const findAndCallApi: FindAndCallCreator =
  ({ actions }) =>
  async (payload, { context, builderContext }) => {
    if (!payload) return "PayloadNotFound";

    const { name, type, params } = payload;

    const action = actions.find((a) => a.name === name);

    if (!action) return "ActionNotFound";

    if (type === "parameterizedAction") {
      const parameterizedAction = action.do as ParameterizedAction<any, any>;
      await parameterizedAction(params, context, builderContext);
    } else {
      const simpleAction = action.do as SimpleAction<any>;
      await simpleAction(context, builderContext);
    }

    return "ActionExecuted";
  };
