/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */

import {ButtonColor, ButtonColorUnion} from 'vk-io';

declare global {
  namespace JSX {
    interface Element extends Promise<R1IO.ReactElement<any, any>> {}

    interface ElementAttributesProperty {
      props: {};
    }
    interface ElementChildrenAttribute {
      children: {};
    }

    // #region Buttons Typization
    type Colors = ButtonColor | ButtonColorUnion;

    type ActionPayload = {
      actionName: string;
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
        ({label: string} | {children: string});
      row: {children: Button | Button[]};
      menu: {children: Row | Row[]};
    }
  }

  namespace R1IO {
    interface ReactElement<
      P = any,
      T extends string | ((props: any) => ReactElement<any, any> | null) =
        | string
        | ((props: any) => ReactElement<any, any> | null)
    > {
      type: T;
      props: P;
    }

    type ChildText = string | number;
    type R1IOChild = ReactElement | ReactElement[] | ChildText;

    type ReactNodeArray = Array<ReactNode>;
    type ReactFragment = {} | ReactNodeArray;
    type ReactNode = R1IOChild | ReactFragment | boolean | null | undefined;

    type PropsWithChildren<P> = P & {children?: ReactNode | undefined};

    interface FC<P = {}> {
      (props: PropsWithChildren<P>): Promise<ReactElement<any, any>> | null;
    }
  }
}

export {};
