import {Actions, createAction, createParametarizedAction} from '@Root';
import type {MessageContext} from 'vk-io';

const TEST_ACTION_NAME = 'test action name';

interface ActionProps {
  hello: string;
  my: number;
  friend: boolean;
}

const actionProps: ActionProps = {
  friend: true,
  hello: 'some string',
  my: 2,
};

interface GlobalContext {
  secondHello: string;
}

describe('Create Parameterized Action', () => {
  const actionExecutorMock = jest.fn();

  const testAction = createParametarizedAction<GlobalContext, ActionProps>(
    TEST_ACTION_NAME,
    actionExecutorMock
  );
  const actionPayload = testAction(actionProps);

  test('Action constructor should have correct props', async () => {
    expect(actionPayload.actionName).toBe('test action name');
    expect(actionPayload.params).toMatchObject(actionProps);
  });

  test('Action should be in ActionsBuffer', () => {
    expect(Actions.isAlreadyExists(TEST_ACTION_NAME)).toBeTruthy();
  });

  test('Action executor should have correct props', async () => {
    const actionExecutor = Actions.find(TEST_ACTION_NAME);

    if (!actionExecutor) {
      throw new Error(`There is no "${TEST_ACTION_NAME}" action`);
    }

    expect(actionExecutor.type).toBe('ParameterizedAction');
    expect(actionExecutor.actionName).toBe(TEST_ACTION_NAME);

    expect(typeof actionExecutor.do === typeof Function).toBe(true);

    await actionExecutor.do(
      {test: 1},
      {test: 2} as unknown as MessageContext,
      actionProps
    );

    expect(actionExecutorMock).toHaveBeenCalledWith(
      {test: 1},
      {test: 2},
      actionProps
    );
  });

  test('Dublicate action creation should throw an "This action already exists" error', () => {
    const createDublicateAction = () =>
      createAction(TEST_ACTION_NAME, () => {});

    expect(createDublicateAction).toThrowErrorMatchingInlineSnapshot(
      `"Action with name \\"test action name\\" already exist"`
    );
  });
});
