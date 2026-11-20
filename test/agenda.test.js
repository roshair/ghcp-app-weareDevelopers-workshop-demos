import assert from 'node:assert/strict';
import test from 'node:test';
import { formatDuration } from '../src/agenda.js';

test('formats the two-hour workshop', () => {
  assert.equal(formatDuration(120), '2h 0m');
});

test('preserves remaining minutes', () => {
  assert.equal(formatDuration(90), '1h 30m');
});

test('handles zero and sub-hour durations', () => {
  assert.equal(formatDuration(0), '0h 0m');
  assert.equal(formatDuration(25), '0h 25m');
});

test('rejects invalid duration inputs', () => {
  for (const minutes of [-1, 1.5, NaN, Infinity, '120', Number.MAX_SAFE_INTEGER + 1]) {
    assert.throws(() => formatDuration(minutes), RangeError);
  }
});
