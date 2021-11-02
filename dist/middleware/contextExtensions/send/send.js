"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customSend = void 0;
const customSend = ({ buildKeyboard }) => async (text, params) => [text, { keyboard: await buildKeyboard(), ...params }];
exports.customSend = customSend;
//# sourceMappingURL=send.js.map