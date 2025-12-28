# Capslock - Playwright + Typescript E2E Tests

## Overview

This repository contains an end-to-end automation framework built with Playwright and TypeScript for testing a Capslock QA landing page.

## Scope

Automation targets the most critical user journeys on the landing page.

## Tech Stack

- Playwright Test
- TypeScript

## Project Structure

The framework follows a Page Object Model approach, with a clear separation between page behavior, reusable UI components, test specifications, and non-UI utilities.

The structure is intentionally lightweight to avoid unnecessary abstractions while remaining scalable.

capslock-playwright-ts/
├─ src/
│ ├─ pages/
│ │ └─ landing.page.ts
│ │
│ ├─ tests/
│ │ └─ landing-page.spec.ts
│ │
│ ├─ utils/
│ │ └─ test-data.ts
│ │
│ └─ shared/
│ └─ constants.ts
│
├─ config/
│ └─ playwright.env.ts
│
├─ playwright-report/
│
├─ .env
├─ playwright.config.ts
├─ package.json
├─ tsconfig.json
├─ README.md
├─ node_modules/
└─ .gitignore
