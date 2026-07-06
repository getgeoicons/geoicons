# Security Policy

## Reporting a vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, email **support@geoicons.io** with:

- a description of the issue and its impact,
- affected package(s) and version(s),
- steps to reproduce (a minimal proof-of-concept if possible).

We aim to acknowledge reports within **3 business days** and to keep you updated as we investigate and ship a fix. Please give us reasonable time to remediate before any public disclosure.

## Scope

These packages are dependency-free at runtime and perform **offline** ES256 license verification using the browser's native Web Crypto — there is no server call, no telemetry, and no data collection. Areas of particular interest for reports:

- the license-verification path in `@geoicons/core` (signature checks, key parsing),
- any way an icon component could inject or execute untrusted content,
- supply-chain concerns with the published npm tarballs.

## Supported versions

Security fixes are released against the **latest published** version of each package. Please upgrade to the newest release before reporting.
