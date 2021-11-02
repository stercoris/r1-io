import { KeyboardBuilder } from "vk-io";
import { ParamsMiddleware } from "../IParamsMiddleware";
interface CustomSendProps {
    buildKeyboard: () => Promise<KeyboardBuilder>;
}
export declare const customSend: ParamsMiddleware<CustomSendProps>;
export {};
//# sourceMappingURL=send.d.ts.map