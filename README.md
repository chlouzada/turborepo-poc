# Turborepo POC

This is a POC on a Firebase Functions project using multiple packages to create a single Firebase Functions application

## What's inside?

This includes the following packages and apps:

### Apps

- `functions`: an [Firebase Functions](https://firebase.google.com/docs/functions) application

### Packages

- `client`: a client package that exports a Firebase Functions
- `user`: a user package that exports a Firebase Functions
- `utils`: utility functions used on other packages
- `logger`: isomorphic logger (a small wrapper around console.log)
- `scripts`: Jest and eslint configurations
- `tsconfig`: tsconfig.json;s used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).
