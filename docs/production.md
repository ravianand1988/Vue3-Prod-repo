# Building and deploying to production

- [From the terminal](#from-the-terminal)
- [From Circle CI](#from-circle-ci)

## From the terminal

```bash
# Compiles and minifies for production
npm run build
```

```bash
# Lints and fixes files
npm run lint
```

This results in your compiled application in a `dist` directory.

## From Circle CI

Update `.circleci/config.yml` to automatically deploy to staging and/or production on a successful build.
 See comments in that file for details.
