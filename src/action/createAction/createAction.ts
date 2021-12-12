import {Actions, SimpleAction} from '@Action/index';

export type SimpleActionPayloadCreateFunc = () => JSX.ActionPayload;

type ActionCreator = <KeyboardBuilderContext>(
  name: string,
  action: SimpleAction<KeyboardBuilderContext>
) => SimpleActionPayloadCreateFunc;

export const createAction: ActionCreator = (name, action) => {
  if (Actions.isActionAlreadyExists(name)) {
    throw new Error(`Action with name "${name}" already exist`);
  }

  Actions.addAction({do: action, name, type: 'SimpleAction'});

  return () => ({name});
};
