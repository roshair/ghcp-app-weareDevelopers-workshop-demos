# Instructor runbook: two repositories, one participant pack

**For Romaan Shair and Siddhat Joshi.** GitHub Copilot App workshop,
WeAreDevelopers India, **25 November 2026, 15:30-17:30 IST (120 minutes)**.
Lead/support assignments below are suggestions, not decisions made by the speakers.

## Which repository to use

| Repository | Audience and starting state | Use |
| --- | --- | --- |
| [ghcp-app-weareDevelopers-workshop](https://github.com/roshair/ghcp-app-weareDevelopers-workshop) | Attendees; `main` is the working planner starter, six cards, no Track selector. Node **22.22.0**, as pinned in `.nvmrc`. | Participant instructions, fictional planner, lab issues, checkpoints, public landing page and optional feedback. Learners work in their own clone/fork, not upstream. |
| [ghcp-app-weareDevelopers-workshop-demos](https://github.com/roshair/ghcp-app-weareDevelopers-workshop-demos) | Instructors; `main` is the passing offline duration fixture. Node **24.22.2**, pinned in `.node-version`. | This runbook, prepared failing PR/comment, real CodeQL finding, service limitations and capture planning. Not participant homework or a lab dependency. |

Only the attendee repository is the **shareable participant pack**. The demo
repository is an instructor workspace, currently **public and not confidential**.
Omitting it from participant links does not prevent someone finding or reading it.
No visibility/access changes or history rewriting are part of this separation.
Old attendee commits may still contain instructor material; removing current links
and files is not erasure. Do not store secrets, participant details or private notes
in either public repository.

Use clearly named windows/clones and check the repository **and branch** before
each prompt. Never rehearse a repair against attendee upstream. There is no code
dependency between the two repositories.

## What to share

| When | Share with attendees | Keep with instructors |
| --- | --- | --- |
| Before | [Attendee landing page](https://roshair.github.io/ghcp-app-weareDevelopers-workshop/), its existing QR code, [starter repository](https://github.com/roshair/ghcp-app-weareDevelopers-workshop), [participant guide](https://github.com/roshair/ghcp-app-weareDevelopers-workshop/blob/main/docs/guide.md), Git/Node/app prerequisites. Explain that public materials/hosted planner are readable without GitHub sign-in, while app labs need an authorized GitHub account with app access. | This runbook, role allocation, timing cues, demo repo URL, scripted review feedback, intentional regression and recording preparation. |
| During | Landing-page QR and participant guide; [track-filter issue](https://github.com/roshair/ghcp-app-weareDevelopers-workshop/issues/1) and [README issue](https://github.com/roshair/ghcp-app-weareDevelopers-workshop/issues/2); learner-owned worktrees; checkpoints when recovery is needed. | Screen-share instructor demos as observation, not a repo attendees must clone. Avoid private tabs, notifications, account data, sign-in and consent screens. |
| After | Same attendee page/repository/guide, completed checkpoint for comparison, participant-facing official documentation and optional [public GitHub feedback form](https://github.com/roshair/ghcp-app-weareDevelopers-workshop/issues/new?template=workshop-feedback.yml). Clearly state feedback needs sign-in and creates a public issue. | Demo reset instructions, answer narration, operational checklist and unreviewed recordings. A sanitized authentic clip may be shared separately only after approval/privacy review; no clips are currently ready. |

Do not require GitHub employment or organization membership to read the public pack.
Participants without app/account access can pair, observe, or use the hosted starter
and guide; do not imply the hosted planner alone provides Copilot app access.
Do not collect credentials or ask attendees to post private details in feedback.
The participant guide can include lab outcomes and recovery checkpoints; presenter
timing/control instructions belong here.

## Suggested two-presenter running order

| Time (IST) | Minutes | Suggested lead / support | Instructor cues and observable outcome |
| --- | --- | --- | --- |
| 15:30-15:48 | 18 | Romaan / Siddhat | Overview: Copilot Project is app context/coordination, not a GitHub Projects board. Fusion is applicable Auto routing; subagents are delegated workers. Set the inspect/approve/isolate expectation. Siddhat checks room readiness. |
| 15:48-15:55 | 7 | Siddhat / Romaan | Readiness: attendee `main`, correct Node pin, starter commands and `/planner/`. Show six cards, `6 shown · 0 saved`, no Track selector. Humans approve recognized repository trust themselves. Offer pairing/hosted observation if access is missing. |
| 15:55-16:15 | 20 | Romaan / Siddhat | Two issues, two local worktrees from learner baseline. Track-filter session changes planner/tests; documentation session changes only `README.md`. Inspect plans before approval; prompts should not push or open PRs. Support checks participants are not using the demo repo. |
| 16:15-16:27 | 12 | Siddhat / Romaan | Browser feedback loop in the **feature worktree**. Save the 09:00 Community talk, choose Engineering, then All tracks. Observe `2 shown · 1 saved`, then `6 shown · 1 saved`; preserve order and saved picks. Canvas unavailable: use browser observations, not invented evidence. |
| 16:27-16:50 | 23 | Romaan / Siddhat | Review local diff, tests and build; learners may use their own fork for practice CI. Switch visibly to **demo PR #1** for scripted review/CI repair and the genuine security alert. Explain local review vs CodeQL vs Code Quality. Keep merging off; enable repair only with explicit presenter approval. |
| 16:50-17:00 | 10 | Siddhat / Romaan | Bounded automation in attendee clone: manual-only, read README, return five cited yes/no lines (Node/install/test/build/launch). No edits, external connectors, recurrence or write permissions. Inspect once and pause/disable/delete. If unavailable, run the prompt in an ordinary session. |
| 17:00-17:12 | 12 | Siddhat / Romaan | Advanced instructor demos: authorized ADO read and harmless GUI-only Computer Use, only if prerequisites are met. Otherwise use an approved verified clip, or explain the workflow and exact blocker. All recordings are currently pending; never imply unavailable flows ran. |
| 17:12-17:15 | 3 | Romaan / Siddhat | Recovery: inspect status/diff, preserve work, create a fresh checkpoint worktree when needed. Review Node/port/account fallbacks. Do not reset, force-switch or paste credentials. |
| 17:15-17:30 | 15 | Both | Q&A: compare what participants approved, inspected and corrected. Share attendee links and optional public feedback, not instructor repository/notes. Explain what is live, pending and unsupported. |

This is exactly 120 minutes. If a demo stalls, stop within its slot and describe
the blocker; preserve Q&A. Suggested support duties throughout: watch the clock,
help participants, check the displayed repo/branch, and warn before private data
or authentication appears.

## Preflight on the actual presenter machines

1. Verify app/account access, required previews/integrations and Git sign-in.
   Each human handles repository trust, OS permissions and authentication; no
   scripted approval of prompts. Check both supported Node pins, not one shared
   assumption about runtime.
2. In a fresh **attendee `main` clone**, run:

   ```sh
   npm ci
   npm test
   npm run build
   npm start
   ```

   Open `http://127.0.0.1:4173/planner/`. Confirm six cards, Save buttons and no
   filter. Stop with `Ctrl+C`. Do not run these planner/build commands in demos.
3. In a separate attendee `checkpoint/complete` worktree, repeat the checks and
   verify Engineering shows two sessions in order while a saved Community session
   survives filter changes. Keep completed answers out of the starter worktree.
4. Open the attendee landing page on a phone without an authenticated GitHub tab.
   Scan `docs/assets/workshop-qr.png` from the attendee repo with a native scanner.
   Check issues/checkpoints and the hosted planner. Open optional feedback in a
   signed-in tab without submitting a test response.
5. In **demos `main`**, select `.node-version` and run `npm run check` and `npm test`.
   All four tests must pass; there is no dependency install or app server here.
6. Inspect the **existing demos PR** and its actual checks/comment/alert, using
   the references below. Do not repair it during preflight: repair consumes the
   prepared red starting state. Confirm Agent Merge off and no auto-merge.
7. Check approved recorder, offline playback, audio and privacy review. Keep
   credentials, private organization data, personal notifications and sign-in
   screens out of capture. If a required flow/clip is missing, rehearse the honest
   explanation rather than promising a recording.

## Exact demo state and genuine evidence

Use demos PR [roshair/ghcp-app-weareDevelopers-workshop-demos#1](https://github.com/roshair/ghcp-app-weareDevelopers-workshop-demos/pull/1),
head **`roshair-workshop-presenter-demos`**, base **`main`**. This is not the attendee
feature branch or a learner PR. The prepared change uses `Math.round` instead of
`Math.floor`; the existing 90-minute test receives `2h 30m` instead of `1h 30m`.
Exactly one of four tests fails; syntax checks pass. Keep the test unchanged.

| Evidence | Verified reference / use |
| --- | --- |
| Passing demo baseline CI | [Main Fixture CI](https://github.com/roshair/ghcp-app-weareDevelopers-workshop-demos/actions/runs/44686581912), four tests passing. |
| Expected regression CI | [Failed Fixture CI](https://github.com/roshair/ghcp-app-weareDevelopers-workshop-demos/actions/runs/44686736826), four tests, three pass, one fail. |
| Scripted real review comment | [Inline comment on `src/agenda.js:5`](https://github.com/roshair/ghcp-app-weareDevelopers-workshop-demos/pull/1#discussion_r4639147970), explicitly labelled SCRIPTED DEMO, requesting floor division and unchanged tests. |
| Successful security scan | [Main CodeQL run](https://github.com/roshair/ghcp-app-weareDevelopers-workshop-demos/actions/runs/44686581980), actual CodeQL analysis. |
| Genuine security finding | [Code-scanning alert #1](https://github.com/roshair/ghcp-app-weareDevelopers-workshop-demos/security/code-scanning/1), `js/incomplete-hostname-regexp`, `training/hostname-regexp.js:3`. |

Evidence is a dated snapshot, not a promise about workshop-day state. Recheck live.
The regex is an offline, reserved-domain training exhibit, never imported or used
for network access/authentication. The alert is real; no service output was invented.
Local security review is not a CodeQL run. The App security extension supports
code-scanning alerts, not secret-scanning or Dependabot alerts.

**Safeguards:** PR stays open; auto-merge and Agent Merge are off during setup.
No new PR is needed for this documentation change. Enable live repair only with
explicit presenter approval, and keep merge permission off. Do not merge the
intentional regression, dismiss the prepared alert, weaken tests, or force-push
over another person's work. After a repair, the red state is gone; plan any reset
separately with owner approval.

## Availability gaps and recording checklist

Read [service readiness](service-readiness.md) for checks and setup sources,
[timed capture runbooks](capture-runbooks.md) for all four narratives, and
[media readiness manifest](../media/readiness.json) before promising a fallback.

| Capability | Current limitation / presenter action |
| --- | --- |
| GitHub Code Quality | Authenticated setup API returned HTTP 404, `Code quality is not available for this repository.` Do not substitute tests or CodeQL security scans for this separate product. No paid activation/trial; entitled-repository checklist is in service readiness. |
| AI generic secret detection | Not supported by this personally owned repo; docs require organization/enterprise-owned Secret Protection. Ordinary public secret scanning and push protection are enabled, but are not AI generic detection. Never seed real credentials. |
| ADO | No authorized tenant/project/work item/integration access supplied. Human sign-in/consent, synthetic permitted data and approved redaction are prerequisites. No successful ADO flow or footage is claimed. |
| Computer Use | Requires supported tooling and human-granted Accessibility/Screen Recording permissions. Only GUI-observed, harmless fictional content. Its API does not capture/export MP4; no shell/OS automation workaround. |
| Recordings | **All four actual videos PENDING**: Agent Merge, security findings, ADO auth-dependent flow and Computer Use. Scripts/screenshots are not videos. |

For each approved capture: verify start state, record one flow for approximately
60-90 seconds, end on the genuine visible result, inspect audio/playback offline,
redact private/sign-in/consent details, and update the manifest with the authentic
file and evidence only after review. Human-operated approved recorder required.
Agent Merge capture consumes the red PR; security capture needs the real App alert
view; ADO needs missing authorized access; Computer Use needs native grants.
If none is ready on workshop day, narrate the expected workflow and its blocker.

## Participant recovery cues (instructors guide, learners keep their work)

Inspect `git status` and `git diff`; do not reset or force-switch their worktree.
For a fresh recovery checkout of the **attendee** repository:

```sh
git fetch https://github.com/roshair/ghcp-app-weareDevelopers-workshop.git checkpoint/pr-ready
git worktree add -b lab-recovery ../planner-recovery FETCH_HEAD
```

Use a new local branch/directory name on repeats. Select the checkpoint needed:

| Attendee branch | Expected state |
| --- | --- |
| `main` / `checkpoint/start` | Working baseline and starter tests; no Track selector. |
| `checkpoint/feature` | Working filter; starter tests still pass. |
| `checkpoint/pr-ready` | Filtering regression tests and reviewer checklist. |
| `checkpoint/complete` | Feature plus independent README solution, for comparison. |

Wrong Node: select attendee `.nvmrc` and rerun `npm ci`. Busy `4173`: stop only the
known server or use `PORT=4174 npm start` (PowerShell: `$env:PORT='4174'; npm start`),
then preview `/planner/` on that port. Missing account access: pair or use the hosted
planner/guide. Practice PRs go only to a learner's own fork when access/Actions allow;
never send them to workshop upstream.

## Preservation provenance

Instructor material was consolidated from attendee commit
[`1d5957e02105437a6cadb6319ac62f4ecc1d8807`](https://github.com/roshair/ghcp-app-weareDevelopers-workshop/tree/1d5957e02105437a6cadb6319ac62f4ecc1d8807):
`README.md`, `docs/guide.md`, `docs/instructor.md` and `docs/index.html`.
Preserved here: full running order, instructor preflight, parallel-worktree/browser
checkpoints, review/CI/security/automation/demo cues, recovery, sharing/feedback
boundaries and fallback recording requirements. Participant prompts/content stay
in the attendee pack. This consolidation does not rewrite that repository's history.
