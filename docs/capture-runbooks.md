# Fallback capture runbooks

All four actual recordings are **PENDING**. These are shot lists and narration,
not recordings or proof that a service ran. Target 60-90 seconds each. Use the
presenter's approved recorder; Computer Use does not export MP4 footage.
Humans handle OS capture permissions, authentication and consent themselves.
No scripted interaction may approve a native trust, sign-in or permission prompt.
Save approved, reviewed captures outside Git until privacy review is complete.
Replace pending manifest fields only after reviewing authentic media.

## 1. Agent Merge / CI repair (75-90 seconds)

Prerequisites: real open demo PR, red Fixture CI, scripted inline comment, trusted
checkout, App availability and explicit approval to enable repair actions.
Long-running agent/CI work may require editing the video; label cuts honestly.
Start: PR detail visible, red check expanded, Agent Merge off.

| Time | Shot and narration |
| --- | --- |
| 0-15s | Show PR title and expected failure: "This synthetic regression rounds 90 minutes up to two hours. Main is green." |
| 15-30s | Show actual inline comment: "This scripted review asks for floor, keeping the regression test." |
| 30-50s | With explicit presenter approval, enable repair/review actions, not merging: "The agent can address feedback and failed CI; merging remains a separate decision." |
| 50-75s | Show genuine diff and completed green checks, if available. Otherwise stop and label execution pending; do not manufacture success. |
| 75-90s | Show PR still open, turn repair actions off: "The one-line repair preserves the tests; nothing was merged." |

Stop: PR open, correct fix visible, checks green if actually completed, Agent Merge
off. Expected evidence: canonical PR, original failed run, review comment, fix commit,
successful run, and authentic recording. Capture consumes the prepared red state.

## 2. Actual security findings (60-75 seconds)

Prerequisites: successful CodeQL analysis and at least one actual open code-scanning
alert; App security extension access. If there are no alerts, capture is blocked.
Start: CodeQL analysis and the real alert visible; no secret-scanning page substitute.

| Time | Shot and narration |
| --- | --- |
| 0-15s | Show successful CodeQL scan: "This is a real GitHub CodeQL result, not a local review." |
| 15-35s | Open actual finding with rule and location: "The isolated public-label digest is a training exhibit, not deployed authentication." |
| 35-55s | Show supported App security view and remediation explanation; request a fix only in an isolated branch with approval. |
| 55-75s | Show provenance: "Code scanning, Code Quality and secret scanning are different services. AI generic secrets are unavailable in this personal repository." |

Stop: unchanged alert and source visible unless an approved fix was genuinely
completed. Expected evidence: analysis URL, real alert URL/rule/location, App view,
authentic capture. Do not call a hypothetical finding an actual alert.

## 3. ADO authentication-dependent flow (60-90 seconds)

Prerequisites: presenter-authorized Azure DevOps tenant/project and synthetic work
item; supported connected integration; permission to show its data; approved recorder.
None of this access is supplied by this repository. Start: signed-out integration
state, only public/synthetic context visible.

| Time | Shot and narration |
| --- | --- |
| 0-15s | Show connection requirement: "This flow depends on authorized ADO access; it is not an offline guarantee." |
| 15-35s | Human chooses sign-in; pause recording before login, MFA or consent. Resume only after redaction review. Narrate the gap rather than recording credentials. |
| 35-65s | Read a permitted synthetic work item and show a proposed action, not an unapproved write. |
| 65-90s | Show actual returned identifier/status and explain authorization boundaries. If blocked, show only the genuine sanitized error and mark completion pending. |

Stop: authorized read complete or exact blocker visible; no unapproved writes.
Evidence: sanitized authentic service result and capture. Redact email/account IDs,
tenant-private URLs, cookies, tokens, MFA, sign-in and consent details. Do not invent
an ADO work item, tenant, screenshot or success response.

## 4. Harmless GUI-only Computer Use (60-75 seconds)

Prerequisites: Accessibility and Screen Recording grants made by the human,
supported Computer Use tool, empty local text editor document and approved recorder.
Start: blank disposable document; no private windows or clipboard data visible.

| Time | Shot and narration |
| --- | --- |
| 0-15s | Show blank editor: "The agent observes and operates the GUI, not a hidden shell." |
| 15-40s | Ask it to type `Workshop demo: 2h 0m` using documented GUI APIs and inspect the actual resulting screen. |
| 40-60s | Select the typed line through GUI interaction; show the observed result. Stop if permissions or user interruption occur. |
| 60-75s | "This is a disposable offline document. Authentication and OS grants remain human decisions." |

Stop: expected text visibly present in unsaved disposable document, no files changed
outside the approved document. Evidence: genuine observation and approved capture.
Do not use AppleScript, osascript, screencapture, hidden UI automation or shell
fallbacks to bypass Computer Use limitations. Close/discard the document manually.
