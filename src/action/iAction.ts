import { MessageContext } from "vk-io";

type MaybePromise = Promise<unknown> | unknown;

export type ParameterizedAction<P, O> = (
  props: P,
  context: MessageContext,
  keyboardBuilderProps: O
) => MaybePromise;

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
