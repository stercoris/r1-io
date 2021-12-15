import {Actions, SimpleAction} from '@Root';
import {MessageContext} from 'vk-io';
import {createAction} from '../createAction';

const TEST_ACTION_NAME = 'test action name';

interface GlobalContext {
  secondHello: string;
}

describe('Create Simple Action', () => {
  const actionExecutorMock = jest.fn();

  const testAction = createAction<GlobalContext>(
    TEST_ACTION_NAME,
    actionExecutorMock
  );

  const actionPayload = testAction();

  test('Action constructor should have correct props', async () => {
    expect(actionPayload.actionName).toBe('test action name');
  });

  test('Action should be in ActionsBuffer', () => {
    expect(Actions.isAlreadyExists(TEST_ACTION_NAME)).toBeTruthy();
  });

  test('Action executor should have correct props', async () => {
    const actionExecutor = Actions.find(TEST_ACTION_NAME);

    if (!actionExecutor) {
      throw new Error(`There is no "${TEST_ACTION_NAME}" action`);
    }

    expect(actionExecutor.type).toBe('SimpleAction');
    expect(actionExecutor.actionName).toBe(TEST_ACTION_NAME);

    expect(typeof actionExecutor.do === typeof Function).toBe(true);

    await (actionExecutor.do as SimpleAction<any>)(
      {test: 1} as unknown as MessageContext,
      {test: 2}
    );

    expect(actionExecutorMock).toHaveBeenCalledWith({test: 1}, {test: 2});
  });

  test('Dublicate action creation should throw an "This action already exists" error', () => {
    const createDublicateAction = () =>
      createAction(TEST_ACTION_NAME, () => {});

    expect(createDublicateAction).toThrowErrorMatchingInlineSnapshot(
      `"Action with name \\"test action name\\" already exist"`
    );
  });
});
