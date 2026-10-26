# Cute Calculator

A small React 18 and TypeScript calculator demo built with Vite and Tailwind CSS.
It presents basic arithmetic, decimal input, clearing, animated display/error
feedback and an animated background. It is a frontend UI experiment, with no
backend, accounts or stored calculation history.

## Run locally

The locked Vite package declares Node.js `^18.0.0 || ^20.0.0 || >=22.0.0`.
Use a compatible runtime and npm:

```bash
git clone https://github.com/ah682/cute-calculator.git
cd cute-calculator
npm ci
npm run dev
```

Vite prints the local URL. `npm run build` runs TypeScript and creates `dist/`;
`npm run preview` serves the build. `npm run lint` and `npm run format:check` run
the configured source checks. There is no automated test script at present.

## Status and limitations

This is a visual arithmetic demo, not a financial or scientific calculator. The
current evaluator uses a filtered JavaScript expression and displays results to
four decimal places; floating-point behavior, invalid expressions and nonfinite
results need review before wider use. Do not treat input filtering as a reusable
untrusted-code execution boundary. Controls and keyboard/screen-reader operation
also need a dedicated accessibility review.

`package.json` and `public/CNAME` name `cutecalculator.avaonline.me`; these are
hosting configuration, not evidence that the deployment is currently reachable.
Changes should include arithmetic edge cases and a manual interaction check.

React/Three.js ecosystem libraries and any bundled images retain their respective
licences and attribution requirements. This README claims neither external design
authorship nor new permissions for third-party assets, and adds no licence grant.
