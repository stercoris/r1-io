import {Actions} from './actions';
import {ParameterizedAction} from './iAction';

export interface ParameterizedActionPayload<T> extends JSX.ActionPayload {
  name: string;
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
  if (Actions.isActionAlreadyExists(name)) {
    throw new Error(`Action with name "${name}" already exist`);
  }

  Actions.addAction({do: action, name, type: 'ParameterizedAction'});

  return params => ({name, params});
};
