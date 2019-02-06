import { getDocxObjectFromHtml } from '../index';
test('My getDocxObjectFromHtml', () => {
  expect(getDocxObjectFromHtml('html')).toBe('Hello html');
});