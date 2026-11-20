export function formatDuration(minutes) {
  if (!Number.isSafeInteger(minutes) || minutes < 0) {
    throw new RangeError('Duration must be a non-negative safe integer');
  }
  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;
  return `${hours}h ${remainder}m`;
}
