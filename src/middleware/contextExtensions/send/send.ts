import {IMessageContextSendOptions, KeyboardBuilder} from 'vk-io';
import {ParamsMiddleware} from '../IParamsMiddleware';

interface CustomSendProps {
  buildKeyboard: () => Promise<KeyboardBuilder>;
}

export const customSend: ParamsMiddleware<CustomSendProps> =
  ({buildKeyboard}) =>
  async (
    text: string | IMessageContextSendOptions,
    params?: IMessageContextSendOptions
  ) =>
    [text, {keyboard: await buildKeyboard(), ...params}];
