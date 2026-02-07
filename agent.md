# AGENT Workflow Policy

## Default Execution Rule
For any user request that includes code/content changes, complete the full delivery cycle unless the user explicitly says otherwise.

## Required End-to-End Flow
1. Implement the requested change in code/content.
2. Run project validation checks:
   - `npm run lint`
   - `npm run build`
   - Any additional project checks required by the current task.
3. If checks pass, commit with a clear scoped message.
4. Push to GitHub (current branch unless user requests another branch).
5. Verify deployment workflow was triggered for the pushed commit.
6. Wait for deploy completion and confirm final status.
7. Report back with:
   - Commit SHA
   - Deploy run URL
   - Deploy result (`success` or `failed`)

## Failure Handling
1. If validation fails, fix issues before commit/push.
2. If deployment fails, investigate logs, apply a fix, and repeat the flow from validation through deploy confirmation.
3. Stop only when deploy succeeds or when blocked by missing credentials/infrastructure access; in that case report the blocker clearly.
