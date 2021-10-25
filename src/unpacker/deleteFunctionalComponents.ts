import { R1Node } from "factory/factory";

const getFunctionalContent = (functionalNode: R1Node): R1Node[] => {
  if (functionalNode.content instanceof Array) {
    return functionalNode.content as R1Node[];
  }
  return [functionalNode.content as unknown as R1Node];
};

const getContentWithoutFunctional = (content: R1Node[]): R1Node[] => {
  const withoutFuntional = content.reduce((prev, current) => {
    const currentWithoutFucntional =
      current.type === "functional" ? getFunctionalContent(current) : [current];

    return [...prev, ...currentWithoutFucntional];
  }, [] as R1Node[]);

  if (withoutFuntional.find((n) => n.type === "functional")) {
    return getContentWithoutFunctional(withoutFuntional);
  }

  return withoutFuntional;
};

export const deleteFunctionalComponents = (main: R1Node): R1Node => {
  if (main.type === "button") return main;
  const contentWithoutFC = getContentWithoutFunctional(
    main.content as R1Node[]
  );
  main.content = contentWithoutFC.map((n) => deleteFunctionalComponents(n));
  return main;
};
