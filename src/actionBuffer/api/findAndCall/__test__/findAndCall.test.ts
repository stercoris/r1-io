import {IAction} from '@Root';
import {MessageContext} from 'vk-io';
import {findAndCallApi} from '../findAndCall';

describe('Find And Call API', () => {
  const ACTION_TEST_NAME = 'simple test name';
  const TEST_FN = jest.fn();

  const actions: IAction<any, any>[] = [
    {
      do: TEST_FN,
      name: ACTION_TEST_NAME,
      type: 'ParameterizedAction',
    },
  ];

  const findAndCallAction = findAndCallApi({actions});

  test('`ActionExecuted`', async () => {
    const builderContext = {test: 1};
    const context = {test: 2} as unknown as MessageContext;
    const params = {test: 3};

    const action = await findAndCallAction(
      {name: ACTION_TEST_NAME, params},
      {builderContext, context}
    );

    expect(action).toBe('ActionExecuted');

    expect(TEST_FN).toBeCalledWith(params, context, builderContext);
  });

  test('`ActionNotFound`', async () => {
    const action = await findAndCallAction(
      {name: 'RANDOM NAME'},
      {builderContext: {}, context: {} as MessageContext}
    );

    expect(action).toBe('ActionNotFound');
  });

  test('`PayloadNotFound`', async () => {
    const action = await findAndCallAction(
      undefined as unknown as JSX.ActionPayload,
      {builderContext: {}, context: {} as MessageContext}
    );

    expect(action).toBe('PayloadNotFound');
  });
});
