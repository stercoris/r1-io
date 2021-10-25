export = React;
export as namespace React;

declare namespace React {
  type JSXElementConstructor<P> = (props: P) => ReactElement<any, any> | null;

  interface ReactElement<
    P = any,
    T extends string | JSXElementConstructor<any> =
      | string
      | JSXElementConstructor<any>
  > {
    type: T;
    props: P;
    key: Key | null;
  }

  type FC<P = {}> = FunctionComponent<P>;

  type ReactText = string | number;
  type ReactChild = ReactElement | ReactText;

  interface ReactPortal extends ReactElement {
    key: Key | null;
    children: ReactNode;
  }

  interface ReactNodeArray extends Array<ReactNode> {}
  type ReactFragment = {} | ReactNodeArray;
  type ReactNode =
    | ReactChild
    | ReactFragment
    | ReactPortal
    | boolean
    | null
    | undefined;

  type PropsWithChildren<P> = P & { children?: ReactNode | undefined };

  interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>): Promise<ReactElement<any, any>> | null;
  }

  type Key = string | number;
  type Attributes = { key?: Key | null | undefined };
}

declare global {
  namespace JSX {
    interface Element extends Promise<React.ReactElement<any, any>> {}

    interface ElementAttributesProperty {
      props: {};
    }
    interface ElementChildrenAttribute {
      children: {};
    }

    interface IntrinsicAttributes extends React.Attributes {}

    enum ButtonColor {
      SECONDARY = "secondary",
      PRIMARY = "primary",
      NEGATIVE = "negative",
      POSITIVE = "positive",
    }

    type ActionPayload = {
      name: string;
      params?: Object;
      type: "parameterizedAction" | "action";
    };

    type Colors =
      | ButtonColor
      | "secondary"
      | "primary"
      | "negative"
      | "positive";
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

    type Button = Promise<React.ReactElement<ButtonPayload>>;
    type Row = Promise<React.ReactElement<Button>>;

    interface IntrinsicElements {
      button: Omit<ButtonProps, "label"> &
        ({ label: string } | { children: string });
      row: { children: Button | Button[] };
      menu: { children: Row | Row[] };
    }
  }
}
