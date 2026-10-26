# Cute Calculator

A React and TypeScript calculator with an animated display and background, built
with Vite and Tailwind CSS. It supports basic arithmetic, decimal input and a
clear button, with a short animation when an expression cannot be evaluated.

## Run locally

Use Node.js 22 or newer and npm.

```bash
git clone https://github.com/ah682/cute-calculator.git
cd cute-calculator
npm ci
npm run dev
```

Open the local URL printed by Vite. Click the on-screen keys to enter a calculation.
Results are rounded to four decimal places, with trailing zeros removed.

## Development

- `npm run build` checks TypeScript and creates `dist/`.
- `npm run preview` serves the built site locally.
- `npm run lint` checks the source with ESLint.
- `npm run format:check` checks source formatting with Prettier.

The calculator logic and controls are in `src/App.tsx`; the background is in
`src/components/AnimatedBackground.tsx`. There is no test script yet.

The evaluator uses JavaScript numbers and a filtered expression passed to
`Function`, so floating-point rounding and division by zero need attention when
changing the arithmetic. The controls currently use pointer clicks; keyboard input
has not been added.
