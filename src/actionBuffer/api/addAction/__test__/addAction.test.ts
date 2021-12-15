import {IAction} from '@Root';
import {addActionApi} from '../addAction';

describe('Add Action API', () => {
  const ACTION_TEST_NAME = 'test name';
  const TEST_FN = jest.fn();

  const actions: IAction<any, any>[] = [];
  const addAction = addActionApi({actions});

  test('`add` should behave correctly', () => {
    expect(actions.length).toBe(0);
    addAction({
      do: TEST_FN,
      actionName: ACTION_TEST_NAME,
      type: 'SimpleAction',
    });
    expect(actions.length).toBe(1);

    const [action] = actions;

    expect(action.actionName).toBe(ACTION_TEST_NAME);
    expect(action.type).toBe('SimpleAction');
    expect(action.do).toBe(TEST_FN);
  });
});
