'sq verify' output is for informational display only (shown in the
installation confirmation screen). Do not parse it. `sq` output is
not machine-readable.

Details: https://www.kicksecure.com/wiki/OpenPGP#sqop_vs_sq_for_automations

No --not-before/--not-after: 'sqop verify' above already enforces
signature freshness. Timestamps extracted from 'sqop' output only.

Verification decision logic:

- Only 'sqop verify' can set verification_success=true (above).
- Both 'sqop verify' and 'sq verify' can set verification_success=false.
- 'sq verify' failure therefore overrides a successful 'sqop verify'.
This is by design: both tools must agree for verification to pass,
providing defense in depth via two independent verification paths.
