import type {SimpleActionType} from '@Action/index';
import {ACTIONS} from '@Action/index';

type SimpleActionPayloadCreateFunc = () => JSX.ActionPayload;

type ActionCreator = <KeyboardBuilderContext>(
  name: string,
  action: SimpleActionType<KeyboardBuilderContext>
) => SimpleActionPayloadCreateFunc;

export const createAction: ActionCreator = (name, action) => {
  ACTIONS.add({do: action, actionName: name, type: 'SimpleAction'});

  return () => ({actionName: name});
};
