import {Actions, SimpleAction} from '@Action/index';

export type SimpleActionPayloadCreateFunc = () => JSX.ActionPayload;

type ActionCreator = <KeyboardBuilderContext>(
  name: string,
  action: SimpleAction<KeyboardBuilderContext>
) => SimpleActionPayloadCreateFunc;

export const createAction: ActionCreator = (name, action) => {
  if (Actions.isAlreadyExists(name)) {
    throw new Error(`Action with name "${name}" already exist`);
  }

  Actions.add({do: action, actionName: name, type: 'SimpleAction'});

  return () => ({actionName: name});
};
