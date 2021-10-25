import { BuildKeyboard } from "builder/IBuilder";
import { ContextBundle } from "middleware/IContextBundle";
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
