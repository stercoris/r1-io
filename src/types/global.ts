/* eslint-disable @typescript-eslint/no-namespace */

import type {ButtonColor, ButtonColorUnion} from 'vk-io';

declare global {
  namespace JSX {
    type Element = Promise<R1IO.R1IOElement<any, any>>;

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
      | Promise<R1IO.R1IOElement<ButtonProps>>
      // Added to buttons fragments array support
      | Promise<R1IO.R1IOElement<ButtonProps>>[];

    // #endregion

    // #region Rows Typization
    type Row =
      | Promise<R1IO.R1IOElement<Button>>
      // Added to rows fragments array support
      | Promise<R1IO.R1IOElement<Button>>[];

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
    interface R1IOElement<
      P = any,
      T extends string | ((props: any) => R1IOElement<any, any> | null) =
        | string
        | ((props: any) => R1IOElement<any, any> | null)
    > {
      type: T;
      props: P;
    }

    type ChildText = string | number;
    type R1IOChild = R1IOElement | R1IOElement[] | ChildText;

    type R1IONodeArray = Array<R1IONode>;
    type R1IOFragment = {} | R1IONodeArray;
    type R1IONode = R1IOChild | R1IOFragment | boolean | null | undefined;

    type PropsWithChildren<P> = P & {children?: R1IONode | undefined};

    interface FC<P = {}> {
      (props: PropsWithChildren<P>): Promise<R1IOElement<any, any>> | null;
    }
  }
}

export {};
