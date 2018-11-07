# Setup and development

- [First-time setup](#first-time-setup)
- [Installation](#installation)
- [Dev server](#dev-server)
- [Globals](#globals)
  - [Base components](#base-components)

## First-time setup

Make sure you have the following installed:

- [Node](https://nodejs.org/en/) (at least the latest LTS)
- [npm](https://www.npmjs.com/get-npm) (at least 6.1.0)

Then update the following files to suit your application:

- `src/app.config.js` (provides metadata about your app)
- `.circleci/config.yml` (assuming you want to automatically [deploy to production](production.md)
 with continuous integration)

## Installation

```bash
# Install dependencies from package.json
npm install
```

## Dev server

> Note: If you're on Linux and see an `ENOSPC` error when running the commands below, you must
 [increase the number of available file watchers]
 (https://stackoverflow.com/questions/22475849/node-js-error-enospc#answer-32600959).

```bash
# Compiles and hot-reloads for development
npm run serve

```

## Globals

### Base components

[Base components](https://vuejs.org/v2/style-guide/#Base-component-names-strongly-recommended)
 (a.k.a. presentational, dumb, or pure components) that apply app-specific styling and conventions
  should all begin with the `_base-` prefix. Since these components are typically used in place of
   raw HTML element (and thus used as frequently), they're automatically globally registered for convenience.
    This means you don't have to import and locally register them to use them in templates.
