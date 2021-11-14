import {KeyboardBuilder} from 'vk-io';

export type BuildKeyboard<C> = (context: C) => Promise<KeyboardBuilder>;

export interface BaseRouter {
  fallbackActions?: JSX.ActionPayload[];
  onMenuExit?: JSX.ActionPayload[];
  onMenuEntering?: JSX.ActionPayload[];
}

export interface Router<C> extends BaseRouter {
  build: BuildKeyboard<C>;
}

export interface RouterBuilder<C> extends BaseRouter {
  build: R1IO.FC<C>;
}

export type IRouter<C> = (context: C) => Router<C>;
