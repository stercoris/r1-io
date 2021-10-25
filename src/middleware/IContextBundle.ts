import { MessageContext } from "vk-io";

export interface ContextBundle<C extends {}> {
  context: MessageContext;
  builderContext: C;
}
