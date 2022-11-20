import type {ParameterizedActionType} from '@Action/index';
import {ACTIONS} from '@Action/index';

interface ParameterizedActionPayload<T extends Object>
  extends JSX.ActionPayload {
  actionName: string;
  params: T;
}

type ParameterizedPayloadCreateFunc<T extends Object> = (
  args: T
) => ParameterizedActionPayload<T>;

type ParameterizedActionCreator = <
  KeyboardBuilderContext,
  T extends Object = {}
>(
  name: string,
  action: ParameterizedActionType<T, KeyboardBuilderContext>
) => ParameterizedPayloadCreateFunc<T>;

export const createParametarizedAction: ParameterizedActionCreator = (
  name,
  action
) => {
  ACTIONS.add({do: action, actionName: name, type: 'ParameterizedAction'});

  return params => ({actionName: name, params});
};
