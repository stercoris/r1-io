import {IAction} from '@Action/iAction';
import {AddAction} from '@ActionBuffer/IActionBuffer';

interface AddActionProps<InternalContext> {
  actions: IAction<InternalContext, any>[];
}

type AddActionApi = <InternalContext>(
  props: AddActionProps<InternalContext>
) => AddAction;

export const addActionApi: AddActionApi =
  ({actions}) =>
  action => {
    actions.push(action);
  };
