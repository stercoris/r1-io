import {IAction} from '@Action/iAction';
import {findActionApi} from '@ActionBuffer/api/findAction/findAction';
import {IActionBuffer} from '@ActionBuffer/IActionBuffer';
import {addActionApi} from './api/addAction/addAction';
import {findAndCallApi} from './api/findAndCall/findAndCall';
import {isActionAlreadyExistsApi} from './api/isActionAlreadyExists/isActionAlreadyExists';

type ActionBufferCreator = <InternalContext>(
  ...actions: IAction<InternalContext, any>[]
) => IActionBuffer<InternalContext>;

export const createActionBuffer: ActionBufferCreator = (...actions) => {
  const internalActions = actions;

  const findAndCall = findAndCallApi({actions: internalActions});
  const addAction = addActionApi({actions: internalActions});
  const isActionAlreadyExists = isActionAlreadyExistsApi({
    actions: internalActions,
  });
  const find = findActionApi({actions: internalActions});

  return {
    find: find,
    findAndCall,
    add: addAction,
    isAlreadyExists: isActionAlreadyExists,
    getAll: () => internalActions,
  };
};
