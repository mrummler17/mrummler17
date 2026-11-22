# Reporting-only automation smoke test
Date: 23 November 2026 (Australia/Sydney).
This documentation-only pull request tests whether Cursor Bugbot and Security Reviewer report findings without changing code, approving, merging, or deploying. It contains no executable code or secrets.
## Handover
- Repository: mrummler17/mrummler17.
- Base main commit: c78468a4bc58d5c33ebc769096cb64c099edce58.
- Test branch: test/cursor-reporting-only-2026-11-23.
- Production/profile README and assets must remain unchanged. Do not merge this test.
- Expected result: review comments or a completed no-findings review; no bot-authored code commits, approval, merge, or deployment.
- PR Router and Vulnerability Scanner are disabled. Bugbot autofix is off.
- All PledgeBoard and TowWise repositories are excluded from automation scopes and Cursor GitHub installation access.
- Billing settings were not changed.
- Cleanup: close this test PR without merging after the result is recorded.

## Active-only scope retest

This second smoke test runs after archived repositories were removed. Cursor is limited to seven active repositories; all PledgeBoard and TowWise repositories remain excluded. The router and scanner remain disabled. This documentation update exercises the PR Pushed trigger without changing production files.
