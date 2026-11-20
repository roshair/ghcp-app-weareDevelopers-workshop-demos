// Offline static-analysis exhibit only; never use this as a URL allowlist.
export function matchesExhibitHostname(publicLabel) {
  return /^example.com$/.test(publicLabel);
}
