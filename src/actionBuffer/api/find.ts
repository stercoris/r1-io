import {IAction} from '@Action/iAction';
import {Find} from '@Root';

interface FindCreatorProps<InternalContext> {
  actions: IAction<InternalContext, any>[];
}

type FindCreator = <InternalContext>(
  actions: FindCreatorProps<InternalContext>
) => Find<InternalContext>;

export const findApi: FindCreator =
  ({actions}) =>
  actionName =>
    actions.find(a => a.name === actionName);
