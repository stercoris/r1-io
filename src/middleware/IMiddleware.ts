import { NextMiddleware } from "middleware-io";
import { MessageContext } from "vk-io";

export type IMiddleware<OutputContext> = (
  context: MessageContext,
  next: NextMiddleware
) => Promise<OutputContext>;
