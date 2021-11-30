# Vue 3 Production template project


> This is a very opinionated architecture and dev environment for new Vue SPA projects using [Vue CLI 3]
(https://github.com/vuejs/vue-cli). Questions, feedback, and for now, even bikeshedding are welcome. 

## Features

- [**Thorough documentation**](#documentation): Written with the same care as Vue's core docs to quickly
 train new team members and consolidate knowledge.
- [**Guaranteed consistency**](docs/linting.md): Opinionated linting for Vue, JavaScript/JSON, SCSS, and Markdown,
 integrated into Visual Studio Code and run against staged files on pre-commit.
- [**First-class tests**](docs/tests.md): Practice test-driven development with both unit and end-to-end tests.
 Unit tests with Jest live as first-class citizens alongside your source files, while Cypress provides reliable
  end-to-end tests in an intuitive GUI for development.
- [**Speedy development**](docs/development.md): Between [configurable generators](docs/development.md#generators),
 [handy aliases](docs/development.md#aliases), and [global base components](docs/development.md#base-components),
  your productivity will skyrocket.

## Getting started

```bash
# 1. Clone the repository.
git clone https://github.com/ravianand1988/Vue3-Prod-repo.git my-prod-project

# 2. Enter your newly-cloned folder.
cd my-prod-project

# 3. Install dependencies. Make sure npm is installed.
npm install

# 4. Read the documentation linked below for "Setup and development".
```

## Documentation

This project includes a `docs` folder with more details on:

1.  [Setup and development](docs/development.md)
1.  [Architecture](docs/architecture.md)
1.  [Languages and technologies](docs/tech.md)
1.  [Routing, layouts, and views](docs/routing.md)
1.  [State management](docs/state.md)
1.  [Tests and mocking the API](docs/tests.md)
1.  [Linting and formatting](docs/linting.md)
1.  [Editor integration](docs/editors.md)
1.  [Building and deploying to production](docs/production.md)
1.  [Troubleshooting](docs/troubleshooting.md)

## FAQ

**Why would I use this `production template project` instead of generating a new project with
 [Vue CLI](https://github.com/vuejs/vue-cli) directly?**

Vue CLI aims for flexibility, making it as simple as possible for any team to set up a new project,
 no matter how big or small, whether it's an app or a library, or what languages and technologies are being used.

This template makes more assumptions. It assumes you're building a large app, possibly developed by a large team.
 It also makes a lot of default choices for you, based on what tends to work well for large, enterprise projects.
  At the same time, it aims to educate and empower users to configure these defaults to ideally suit their
   specific app and team.
