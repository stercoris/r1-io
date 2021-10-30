export { createMiddleware } from "./middleware/Middleware";
export { createBuilder } from "./builder/Builder";
export { createActionBuffer } from "./actionBuffer/ActionBuffer";
export { createAction, createParametarizedAction } from "./action/createAction";
export { ParameterizedActionPayload, SimpleActionPayload, } from "./action/iAction";
import * as Factory from "./factory/factory";
declare namespace R1IO {
    type JSXElementConstructor<P> = (props: P) => ReactElement<any, any> | null;
    interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
        type: T;
        props: P;
        key: Key | null;
    }
    type FC<P = {}> = FunctionComponent<P>;
    type ReactText = string | number;
    type ReactChild = ReactElement | ReactElement[] | ReactText;
    interface ReactPortal extends ReactElement {
        key: Key | null;
        children: ReactNode;
    }
    interface ReactNodeArray extends Array<ReactNode> {
    }
    type ReactFragment = {} | ReactNodeArray;
    type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
    type PropsWithChildren<P> = P & {
        children?: ReactNode | undefined;
    };
    interface FunctionComponent<P = {}> {
        (props: PropsWithChildren<P>): Promise<ReactElement<any, any>> | null;
    }
    type Key = string | number;
    type Attributes = {
        key?: Key | null | undefined;
    };
}
declare global {
    namespace JSX {
        interface Element extends Promise<R1IO.ReactElement<any, any>> {
        }
        interface ElementAttributesProperty {
            props: {};
        }
        interface ElementChildrenAttribute {
            children: {};
        }
        interface IntrinsicAttributes extends R1IO.Attributes {
        }
        enum ButtonColor {
            SECONDARY = "secondary",
            PRIMARY = "primary",
            NEGATIVE = "negative",
            POSITIVE = "positive"
        }
        type ActionPayload = {
            name: string;
            params?: Object;
            type: "parameterizedAction" | "action";
        };
        type Colors = ButtonColor | "secondary" | "primary" | "negative" | "positive";
        interface ButtonProps {
            label: string;
            color?: Colors;
            onClick?: ActionPayload;
        }
        interface ButtonPayload {
            label: string;
            color?: Colors;
            payload?: ActionPayload;
        }
        type RowPayload = ButtonPayload[];
        type MenuPayload = RowPayload[];
        type Button = Promise<R1IO.ReactElement<ButtonPayload>> | Promise<R1IO.ReactElement<ButtonPayload>>[];
        type Row = Promise<R1IO.ReactElement<Button>> | Promise<R1IO.ReactElement<Button>>[];
        interface IntrinsicElements {
            button: Omit<ButtonProps, "label"> & ({
                label: string;
            } | {
                children: string[] | string;
            });
            row: {
                children: Button | Button[];
            };
            menu: {
                children: Row | Row[];
            };
        }
    }
}
declare const R1IO: {
    createElement: (name: Function | Factory.ComponentType, props: JSX.ButtonProps | null, ...children: string[] | Factory.R1Node[]) => Promise<Factory.R1Node | {
        type: Factory.ComponentType;
        content: any[];
    }>;
    Fragment: ({ children }: {
        children: Factory.R1Node[];
    }) => Promise<Factory.R1Node | {
        type: Factory.ComponentType;
        content: any[];
    }>;
};
export default R1IO;
//# sourceMappingURL=index.d.ts.map