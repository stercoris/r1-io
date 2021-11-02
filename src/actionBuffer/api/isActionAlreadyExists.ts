import { IAction } from "@Action/iAction";
import { IsActionAlreadyExists } from "@ActionBuffer/IActionBuffer";

interface IsActionAlreadyExistsBuilderProps<InternalContext> {
  actions: IAction<InternalContext, any>[];
}

type IsActionAlreadyExistsBuilder = <InternalContext>(
  props: IsActionAlreadyExistsBuilderProps<InternalContext>
) => IsActionAlreadyExists;

export const isActionAlreadyExistsApi: IsActionAlreadyExistsBuilder =
  ({ actions }) =>
  (name) =>
    !!actions.find((a) => a.name === name);
