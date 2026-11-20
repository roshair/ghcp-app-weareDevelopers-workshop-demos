# Service readiness

Checked 20 November 2026 against this personal, public repository.
No live credentials, deployable vulnerable app, or paid trial is used.

| Capability | Setup and honest readiness |
| --- | --- |
| Fixture quality | Four focused Node tests and syntax checks; passing baseline and one expected PR failure are verified separately. This is not GitHub Code Quality. |
| Code scanning | READY: advanced CodeQL workflow, JavaScript/TypeScript, security-extended suite. Successful scan produced one actual open hostname-regex alert; evidence below. |
| GitHub Code Quality | Unsupported here: authenticated `GET /repos/roshair/ghcp-app-weareDevelopers-workshop-demos/code-quality/setup` returned HTTP 404, `Code quality is not available for this repository.` No paid activation attempted. |
| Ordinary secret scanning | Repository API reports `secret_scanning.status=enabled` and `secret_scanning_push_protection.status=enabled`. No sample credentials or intentional secret alerts are created. |
| AI generic secret detection | Not enabled. Docs require an organization/enterprise-owned repository with GitHub Secret Protection; this is a personally owned repository. Ordinary public secret scanning is not this capability. |
| App security extension | Demonstrate actual code-scanning alerts only. Do not represent secret-scanning or Dependabot alerts as supported extension findings. |
| Agent Merge | Real PR/checks/comment prepared; feature off during setup and PR stays open. |
| ADO | Pending: no Azure DevOps tenant, authorized work item, or access supplied. Never gather credentials in a demo. |
| Video capture | Pending: Computer Use observes/controls UI but its documented API has no video capture/export. An approved recorder and human-operated permission/sign-in prompts are required. |

## Code Quality setup checklist (an entitled repository only)

1. Obtain an eligible repository and approved entitlement without activating a paid trial.
2. Confirm enterprise/organization policy permits Code Quality and Actions are enabled.
3. In repository Settings > Code quality, inspect availability and billing before enabling.
4. Select JavaScript/TypeScript and a standard runner, save only with owner approval.
5. Inspect actual default-branch findings and PR results. Record canonical URLs and dates.

A 404 is an observed availability blocker, not proof of a particular account's
billing plan. Local tests and CodeQL security scans cannot substitute for Code Quality.

The first scan succeeded with zero alerts: MD5 applied to nonsensitive public labels
did not produce a security finding. That exhibit was replaced by an offline,
reserved-domain regex exhibit based on the documented
[incomplete hostname regex query](https://codeql.github.com/codeql-query-help/javascript/js-incomplete-hostname-regexp/).
The initial bare-domain regex also returned zero findings: this query explicitly
excludes the dot immediately before a top-level domain. The final exhibit uses
an unescaped subdomain separator, matching `wwwXexample.com` as well as
`www.example.com`; it is never used
for networking, redirects, authentication or access control.

## Source references

- [Code Quality REST API](https://docs.github.com/en/rest/code-quality/code-quality)
- [Enabling Code Quality](https://docs.github.com/en/code-security/how-tos/maintain-quality-code/enable-code-quality)
- [AI-detected secrets prerequisites](https://docs.github.com/en/code-security/how-tos/secure-your-secrets/detect-secret-leaks/enabling-secret-scanning-for-ai-detected-secrets)
- [App security alert workflow](https://docs.github.com/en/copilot/how-tos/github-copilot-app/view-and-fix-security-alerts)
- [App pull request workflow](https://docs.github.com/en/copilot/how-tos/github-copilot-app/managing-issues-and-pull-requests)
- [Computer Use](https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/computer-use)

## Verified security and baseline evidence

- [Passing baseline Fixture CI](https://github.com/roshair/ghcp-app-weareDevelopers-workshop-demos/actions/runs/44686397607)
- [Successful CodeQL training scan](https://github.com/roshair/ghcp-app-weareDevelopers-workshop-demos/actions/runs/44686397611)
- [Actual open code-scanning alert #1](https://github.com/roshair/ghcp-app-weareDevelopers-workshop-demos/security/code-scanning/1):
  `js/incomplete-hostname-regexp`, "Incomplete regular expression for hostnames",
  `training/hostname-regexp.js:3`. API state `open`, inspected 20 November 2026.

The alert is a genuine CodeQL result from an offline training exhibit. Remediation
escapes the first dot (`/^www\.example\.com$/`); it must reject `wwwXexample.com`.
Do not dismiss or repair the prepared alert until the presenter is ready to consume
this starting state. The App security view itself remains a capture prerequisite;
no screenshot or video of that view was created during setup.

## Verified scripted PR evidence

- [Open scripted demo PR](https://github.com/roshair/ghcp-app-weareDevelopers-workshop-demos/pull/1)
- [Real scripted inline review comment](https://github.com/roshair/ghcp-app-weareDevelopers-workshop-demos/pull/1#discussion_r4639147970),
  on the changed `src/agenda.js:5` line, requesting floor division without weakening tests.
- [Expected failing Fixture CI](https://github.com/roshair/ghcp-app-weareDevelopers-workshop-demos/actions/runs/44686646091)
- [Latest documented main baseline CI](https://github.com/roshair/ghcp-app-weareDevelopers-workshop-demos/actions/runs/44686581912)

The locally verified demo output is exactly four tests, three passing, one failing:
`preserves remaining minutes`, expected `1h 30m`, actual `2h 30m`. Syntax checks pass.
Only the demo branch introduces the rounding regression. Both the PR body and the
posted inline comment explicitly disclose their scripted purpose.

Live PR inspection confirmed `state=open`, `merged=false`, `auto_merge=null`.
App Agent Merge inspection confirmed `enabled=false`, `merge_pr=false`,
`last_run_at=null`. It was not activated, and no approval/request-changes review
was submitted against the owner's own PR.
