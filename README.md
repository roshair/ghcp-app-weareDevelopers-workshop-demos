# Workshop presenter demos

Presenter-only fixtures for **GitHub Copilot App**, WeAreDevelopers India,
**25 November 2026, 15:30-17:30 IST**, with **Romaan Shair and Siddhat Joshi**.
This is a public, synthetic, nonproduction repository, not an attendee exercise.

Attendee materials live independently at
[ghcp-app-weareDevelopers-workshop](https://github.com/roshair/ghcp-app-weareDevelopers-workshop).
Nothing here imports attendee code or requires external network services.

## Local baseline

Use the exact supported Node version in `.node-version` (**24.22.2**).
There are no third-party dependencies, so no install step or dependency lockfile
is required.

```sh
npm run check
npm test
```

`main` must pass all four tests. `formatDuration(120)` returns `2h 0m`.
The labelled demo PR deliberately changes hour calculation to introduce one
deterministic failure for the existing 90-minute test. Its red CI and explicitly
scripted inline review comment are the real Agent Merge repair exercise.
Do not delete or weaken tests to fix it; restore correct hour calculation.

## Presenter safety and reset

Keep the demo PR open; auto-merge and Agent Merge are not enabled during setup.
Only enable Agent Merge for a live demonstration with explicit presenter approval;
do not grant merge permission unless the presenter separately approves merging.
Never merge the intentionally broken change into `main`.

Repairing the PR destroys the red starting state. Before a rehearsal, inspect
the linked PR and checks rather than assuming it is still red. Recreate the
single regression in a new labelled PR with presenter approval if necessary;
do not force-push over someone else's work.

The isolated static-analysis exhibit in `training/hostname-regexp.js` has an
unescaped subdomain dot in a reserved `www.example.com` hostname expression. It is not imported,
exposed over HTTP, or used for access control. It exists to attempt a genuine
hostname-regex CodeQL finding, not to simulate an alert or provide a vulnerable
service. CodeQL results must be verified before
claiming a finding. Its presence does not cause baseline test/CI failures.

See [service readiness](docs/service-readiness.md),
[capture runbooks](docs/capture-runbooks.md), and
[media manifest](media/readiness.json). Actual video recordings are pending.
