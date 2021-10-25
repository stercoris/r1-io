import { KeyboardBuilder } from "vk-io";

export type BuildKeyboard<C> = (context: C) => Promise<KeyboardBuilder>;

export type MiddlewareMenuConfig<C> = {
  build: BuildKeyboard<C>;
  falldownAction?: JSX.ActionPayload;
};

export type IBuilder<C> = (context: C) => MiddlewareMenuConfig<C>;
