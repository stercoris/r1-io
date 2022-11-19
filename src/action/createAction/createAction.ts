import type {SimpleAction} from '@Action/index';
import {ACTIONS} from '@Action/index';

export type SimpleActionPayloadCreateFunc = () => JSX.ActionPayload;

type ActionCreator = <KeyboardBuilderContext>(
  name: string,
  action: SimpleAction<KeyboardBuilderContext>
) => SimpleActionPayloadCreateFunc;

export const createAction: ActionCreator = (name, action) => {
  if (ACTIONS.isAlreadyExists(name)) {
    throw new Error(`Action with name "${name}" already exist`);
  }

  ACTIONS.add({do: action, actionName: name, type: 'SimpleAction'});

  return () => ({actionName: name});
};
