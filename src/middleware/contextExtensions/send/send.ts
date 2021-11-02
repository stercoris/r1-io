import {
  IMessageContextSendOptions,
  KeyboardBuilder,
  MessageContext,
} from "vk-io";

export const applyCustomSend = (
  build: () => Promise<KeyboardBuilder>,
  context: MessageContext
) => {
  const oldSend = context.send;
  context.send = async (text: string) => {
    const keyboard = await build();
    const params: IMessageContextSendOptions = { keyboard };
    return await oldSend.bind(context)(text, params);
  };
};
