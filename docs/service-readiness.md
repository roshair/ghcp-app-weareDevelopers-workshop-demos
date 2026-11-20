# Service readiness

Checked 20 November 2026 against this personal, public repository.
No live credentials, deployable vulnerable app, or paid trial is used.

| Capability | Setup and honest readiness |
| --- | --- |
| Fixture quality | Four focused Node tests and syntax checks; passing baseline and one expected PR failure are verified separately. This is not GitHub Code Quality. |
| Code scanning | Advanced CodeQL workflow, JavaScript/TypeScript, security-extended suite. Published scan and actual alerts must be inspected; results pending initial run. |
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
