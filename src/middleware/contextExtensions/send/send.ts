import { BuildKeyboard } from "@Builder/IBuilder";
import { ContextBundle } from "@Middleware/IContextBundle";
import { IMessageContextSendOptions } from "vk-io";

export const applyCustomSend = <C extends {}>(
  build: BuildKeyboard<C>,
  { builderContext, context }: ContextBundle<C>
) => {
  const oldSend = context.send;
  context.send = async (text: string) => {
    const keyboard = await build(builderContext);
    const params: IMessageContextSendOptions = { keyboard };
    return await oldSend.bind(context)(text, params);
  };
};
