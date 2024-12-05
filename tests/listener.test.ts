import { userEvent } from '@vitest/browser/context'
import { test, expect } from 'vitest';
import testShiftPlusPointer from '../src/listener';

test('interactivity-api failure', async () => {
  const elem = document.createElement('div');
  elem.append('Hello there');
  document.body.append(elem);

  testShiftPlusPointer(elem);

  const user = userEvent.setup();
  await user.keyboard('{Shift>}');
  await user.click(elem);
  await user.keyboard('{/Shift}');

  expect(elem.getAttribute('aria-selected')).toBe('true');
});