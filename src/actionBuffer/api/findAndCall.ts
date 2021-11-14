import {IAction} from '@Action/iAction';
import {FindAndCall} from '@ActionBuffer/IActionBuffer';

interface FindAndCallCreatorProps<InternalContext> {
  actions: IAction<InternalContext, any>[];
}

type FindAndCallCreator = <InternalContext>(
  actions: FindAndCallCreatorProps<InternalContext>
) => FindAndCall<InternalContext>;

export const findAndCallApi: FindAndCallCreator =
  ({actions}) =>
  async (payload, {context, builderContext}) => {
    if (!payload) return 'PayloadNotFound';

    const {name, params} = payload;

    const action = actions.find(a => a.name === name);

    if (!action) return 'ActionNotFound';

    if (action.type === 'ParameterizedAction') {
      await action.do(params, context, builderContext);
    } else {
      await action.do(context, builderContext);
    }

    return 'ActionExecuted';
  };
