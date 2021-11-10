import { R1Node } from "@Factory/factory";

const getContentWithoutFunctional = (content: R1Node[]): R1Node[] => {
  const withoutFuntional = content.reduce(
    (prev, current) => [
      ...prev,
      ...(current.type === "functional" ? current.content : [current]),
    ],
    [] as R1Node[]
  );

  if (withoutFuntional.find((n) => n.type === "functional")) {
    return getContentWithoutFunctional(withoutFuntional);
  }

  return withoutFuntional;
};

export const deleteFunctionalComponents = (main: R1Node): R1Node => {
  if (main.type === "button") return main;
  console.log(main);

  const contentWithoutFC = getContentWithoutFunctional(main.content);

  main.content = contentWithoutFC.map((n) => deleteFunctionalComponents(n));
  return main;
};
