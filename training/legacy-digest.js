import { createHash } from 'node:crypto';

// Static analysis exhibit only: not imported by the demo, not an authentication primitive.
export function legacyExhibitDigest(publicLabel) {
  return createHash('md5').update(publicLabel).digest('hex');
}
