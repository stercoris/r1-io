export declare type ComponentType = "row" | "button" | "functional" | "menu";
export declare type R1Node = {
    type: ComponentType;
    content: R1Node[] | JSX.ButtonPayload;
};
export declare const createElement: (name: ComponentType | Function, props: JSX.ButtonProps | null, ...children: R1Node[] | string[]) => Promise<R1Node | {
    type: ComponentType;
    content: any[];
}>;
//# sourceMappingURL=factory.d.ts.map