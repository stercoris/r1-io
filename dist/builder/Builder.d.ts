/// <reference types="react" />
import { IBuilder } from "builder/IBuilder";
declare type MenuConfig<C> = {
    build: React.FC<C>;
    onFalldown?: JSX.ActionPayload;
};
declare type EnumToMenu<C, E extends string> = Record<E, MenuConfig<C>>;
export declare const createBuilder: <C extends {}, E extends string>(menuMap: EnumToMenu<C, E>, getMenuFromContext: (context: C) => E) => IBuilder<C>;
export {};
//# sourceMappingURL=Builder.d.ts.map