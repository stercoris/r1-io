"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFunctionalComponents = void 0;
const getFunctionalContent = (functionalNode) => {
    if (functionalNode.content instanceof Array) {
        return functionalNode.content;
    }
    return [functionalNode.content];
};
const getContentWithoutFunctional = (content) => {
    const withoutFuntional = content.reduce((prev, current) => {
        const currentWithoutFucntional = current.type === "functional" ? getFunctionalContent(current) : [current];
        return [...prev, ...currentWithoutFucntional];
    }, []);
    if (withoutFuntional.find((n) => n.type === "functional")) {
        return getContentWithoutFunctional(withoutFuntional);
    }
    return withoutFuntional;
};
const deleteFunctionalComponents = (main) => {
    if (main.type === "button")
        return main;
    const contentWithoutFC = getContentWithoutFunctional(main.content);
    main.content = contentWithoutFC.map((n) => (0, exports.deleteFunctionalComponents)(n));
    return main;
};
exports.deleteFunctionalComponents = deleteFunctionalComponents;
//# sourceMappingURL=deleteFunctionalComponents.js.map