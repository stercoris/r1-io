import type {MessageContext} from 'vk-io';

type MaybePromiseType = Promise<unknown> | unknown;

export type ParameterizedActionType<P, O> = (
  props: P,
  context: MessageContext,
  keyboardBuilderProps: O
) => MaybePromiseType;

export type SimpleActionType<I> = (
  context: MessageContext,
  keyboardBuilderProps: I
) => MaybePromiseType;

export type InternalActionType<KeyboardBuilderContext, ActionProps> =
  | {
      do: ParameterizedActionType<ActionProps, KeyboardBuilderContext>;
      actionName: string;
      type: 'ParameterizedAction';
    }
  | {
      do: SimpleActionType<KeyboardBuilderContext>;
      actionName: string;
      type: 'SimpleAction';
    };
