// Offline static-analysis exhibit only; never use this as a URL allowlist.
export function matchesExhibitHostname(publicLabel) {
  return /^www.example\.com$/.test(publicLabel);
}
