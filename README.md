Repro case for vitest-dev/vitest#7007

Setup:

1. `pnpm install`
2. `pnpm exec playwright install`

Run tests:

- Preview: `pnpm test`
- Playwright: `pnpm test:playwright`
- WebdriverIO: `pnpm test:wdio`
