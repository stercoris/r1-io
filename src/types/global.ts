/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */

import {ButtonColor, ButtonColorUnion} from 'vk-io';

declare global {
  namespace JSX {
    type Element = Promise<R1IO.ReactElement<any, any>>;

    interface ElementAttributesProperty {
      props: {};
    }
    interface ElementChildrenAttribute {
      children: {};
    }

    type IntrinsicAttributes = R1IO.Attributes;

    // #region Buttons Typization
    type Colors = ButtonColor | ButtonColorUnion;

    type ActionPayload = {
      name: string;
      params?: Object;
    };

    interface ButtonProps {
      label: string;
      color?: Colors;
      onClick?: ActionPayload;
    }

    type Button =
      | Promise<R1IO.ReactElement<ButtonProps>>
      // Added to buttons fragments array support
      | Promise<R1IO.ReactElement<ButtonProps>>[];

    // #endregion

    // #region Rows Typization
    type Row =
      | Promise<R1IO.ReactElement<Button>>
      // Added to rows fragments array support
      | Promise<R1IO.ReactElement<Button>>[];

    type RowProps = {};
    // #endregion

    // #region Menu Typization
    type MenuProps = {};
    // #endregion

    interface IntrinsicElements {
      button: Omit<ButtonProps, 'label'> &
        ({label: string} | {children: string[] | string});
      row: {children: Button | Button[]};
      menu: {children: Row | Row[]};
    }
  }

  namespace R1IO {
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
    type ReactChild = ReactElement | ReactElement[] | ReactText;

    interface ReactPortal extends ReactElement {
      key: Key | null;
      children: ReactNode;
    }

    type ReactNodeArray = Array<ReactNode>;
    type ReactFragment = {} | ReactNodeArray;
    type ReactNode =
      | ReactChild
      | ReactFragment
      | ReactPortal
      | boolean
      | null
      | undefined;

    type PropsWithChildren<P> = P & {children?: ReactNode | undefined};

    interface FunctionComponent<P = {}> {
      (props: PropsWithChildren<P>): Promise<ReactElement<any, any>> | null;
    }

    type Key = string | number;
    type Attributes = {key?: Key | null | undefined};
  }
}

export {};
