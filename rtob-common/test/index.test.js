const RtobCommon = require('../index');

test('version exist', () => {
  expect(RtobCommon.version).toBe('v0.0.1');
});

test('adds 1 + 2 to equal 3', () => {
  expect(RtobCommon.sum(1, 2)).toBe(3);
});