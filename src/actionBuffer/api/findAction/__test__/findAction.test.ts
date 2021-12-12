import {IAction} from '@Root';
import {findActionApi} from '../findAction';

describe('Find Action API', () => {
  const ACTION_TEST_NAME = 'test name';
  const TEST_FN = jest.fn();

  const actions: IAction<any, any>[] = [
    {do: TEST_FN, name: ACTION_TEST_NAME, type: 'SimpleAction'},
  ];
  const findAction = findActionApi({actions});

  test('`add` should behave correctly', () => {
    const action = findAction(ACTION_TEST_NAME);

    if (!action) {
      throw new Error('Action not found');
    }

    expect(action.name).toBe(ACTION_TEST_NAME);
    expect(action.type).toBe('SimpleAction');
    expect(action.do).toBe(TEST_FN);
  });
});
