import {IAction} from '@Root';
import {isActionAlreadyExistsApi} from '../isActionAlreadyExists';

describe('Is Action Already Exists API', () => {
  const ACTION_TEST_NAME = 'simple test name';

  const actions: IAction<any, any>[] = [
    {do: () => {}, actionName: ACTION_TEST_NAME, type: 'SimpleAction'},
  ];

  const isActionAlreadyExists = isActionAlreadyExistsApi({actions});

  test('action exist', () => {
    const isExists = isActionAlreadyExists(ACTION_TEST_NAME);
    expect(isExists).toBe(true);
  });

  test('action not exist', () => {
    const isExists = isActionAlreadyExists('random name wqff');
    expect(isExists).toBe(false);
  });
});
