import { MessageContext } from "vk-io";

export interface SimpleActionPayload {
  name: string;
  type: "action";
}
export interface ParameterizedActionPayload<T> {
  name: string;
  params: T;
  type: "parameterizedAction";
}

type MaybePromise = Promise<unknown> | unknown;

export type ParameterizedAction<P, O> = (
  props: P,
  context: MessageContext,
  keyboardBuilderProps: O
) => MaybePromise;

export type ParameterizedPayloadCreateFunc<T> = (
  args: T
) => ParameterizedActionPayload<T>;

export type SimpleAction<I> = (
  context: MessageContext,
  keyboardBuilderProps: I
) => MaybePromise;

export interface IAction<KeyboardBuilderContext, T> {
  do:
    | ParameterizedAction<T, KeyboardBuilderContext>
    | SimpleAction<KeyboardBuilderContext>;
  name: string;
}
