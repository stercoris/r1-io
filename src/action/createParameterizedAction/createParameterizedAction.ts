import {Actions, ParameterizedAction} from '@Action/index';

export interface ParameterizedActionPayload<T> extends JSX.ActionPayload {
  actionName: string;
  params: T;
}

export type ParameterizedPayloadCreateFunc<T> = (
  args: T
) => ParameterizedActionPayload<T>;

type ParameterizedActionCreator = <KeyboardBuilderContext, T = {}>(
  name: string,
  action: ParameterizedAction<T, KeyboardBuilderContext>
) => ParameterizedPayloadCreateFunc<T>;

export const createParametarizedAction: ParameterizedActionCreator = (
  name,
  action
) => {
  if (Actions.isAlreadyExists(name)) {
    throw new Error(`Action with name "${name}" already exist`);
  }

  Actions.add({do: action, actionName: name, type: 'ParameterizedAction'});

  return params => ({actionName: name, params});
};
