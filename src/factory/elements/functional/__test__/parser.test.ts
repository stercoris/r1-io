import {parseFunctional} from '../parser';

describe('Functional parser for fragments & functional components', () => {
  test('will return fucntional object', () => {
    const props = {
      test: 1,
    };

    const children = {
      test: 3,
    };

    const functionalComponent = jest.fn().mockReturnValue({test: 2});

    const functionalParsed = parseFunctional(
      functionalComponent,
      props,
      children
    );

    expect(functionalParsed).toMatchObject({
      content: [{test: 2}],
      type: 'functional',
    });

    expect(functionalComponent).toBeCalledWith({...props, children});
  });
});
