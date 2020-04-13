<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# Nest 7 - Boilerplate

[![GitHub CI](https://github.com/smarlhens/nest7-boilerplate/workflows/CI/badge.svg)](https://github.com/smarlhens/nest7-boilerplate/actions?query=workflow%3ACI)
[![CircleCI](https://circleci.com/gh/smarlhens/nest7-boilerplate.svg?style=svg)](https://circleci.com/gh/smarlhens/nest7-boilerplate)
[![Build Status](https://travis-ci.com/smarlhens/nest7-boilerplate.svg?branch=master)](https://travis-ci.com/smarlhens/nest7-boilerplate)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![GitHub issues](https://img.shields.io/github/issues/smarlhens/nest7-boilerplate)](https://github.com/smarlhens/nest7-boilerplate/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/smarlhens/nest7-boilerplate)](https://github.com/smarlhens/nest7-boilerplate/pulls)
[![GitHub stars](https://img.shields.io/github/stars/smarlhens/nest7-boilerplate)](https://github.com/smarlhens/nest7-boilerplate/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/smarlhens/nest7-boilerplate)](https://github.com/smarlhens/nest7-boilerplate/network)
[![GitHub contributors](https://img.shields.io/github/contributors/smarlhens/nest7-boilerplate)](https://github.com/smarlhens/nest7-boilerplate/graphs/contributors)
[![GitHub license](https://img.shields.io/github/license/smarlhens/nest7-boilerplate)](https://github.com/smarlhens/nest7-boilerplate)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/smarlhens/nest7-boilerplate)
![GitHub repo size](https://img.shields.io/github/repo-size/smarlhens/nest7-boilerplate)
[![HitCount](http://hits.dwyl.io/smarlhens/nest7-boilerplate.svg)](http://hits.dwyl.io/smarlhens/nest7-boilerplate)

## Table of contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [What's in the box ?](#whats-in-the-box-)
  - [CircleCI](#circleci)
  - [Commitizen](#commitizen)
  - [Commitlint](#commitlint)
  - [ESLint](#eslint)
  - [GitHub Actions](#github-actions)
  - [Husky](#husky)
  - [Lint-staged](#lint-staged)
  - [Prettier](#prettier)
  - [Travis CI](#travis-ci)
- [Running the app](#running-the-app)
- [Code scaffolding](#code-scaffolding)
- [Build](#build)
- [Test](#test)
- [Further help](#further-help)

---

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them :

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [Nest CLI](https://docs.nestjs.com/cli/overview)

### Installation

1. Clone the git repository

   ```bash
   git clone https://github.com/smarlhens/nest7-boilerplate.git
   ```

1. Go into the project directory

   ```bash
   cd nest7-boilerplate/
   ```

1. Checkout working branch

   ```bash
   git checkout <branch>
   ```

---

## What's in the box ?

### CircleCI

[CircleCI](https://circleci.com/) automates your software builds, tests, and deployments.

**CircleCI pipeline file**: [`.circleci/config.yml`](https://github.com/smarlhens/nest7-boilerplate/blob/master/.circleci/config.yml).

For more configuration options and details, see the [configuration docs](https://circleci.com/docs/).

---

### Commitizen

[commitizen](https://github.com/commitizen/cz-cli) is a command line utility that makes it easier to create commit messages following the [conventional commit format](https://conventionalcommits.org) specification.

Use `git cz` instead of `git commit` to use commitizen.

[![Add and commit with Commitizen](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)

**Configuration file**: [`.czrc`](https://github.com/smarlhens/nest7-boilerplate/blob/master/.czrc).

---

### Commitlint

[commitlint](https://github.com/conventional-changelog/commitlint) checks if your commit messages meet the [conventional commit format](https://conventionalcommits.org).

**Configuration file**: [`.commitlintrc`](https://github.com/smarlhens/nest7-boilerplate/blob/master/.commitlintrc).

In general the pattern mostly looks like this:

```sh
type(scope?): subject  #scope is optional
```

Are you a good `commitizen` ?

---

### ESLint

[ESLint](https://eslint.org/) is a fully pluggable tool for identifying and reporting on patterns in JavaScript.

**Configuration file**: [`.eslintrc.js`](https://github.com/smarlhens/nest7-boilerplate/blob/master/.eslintrc.js).

For more configuration options and details, see the [configuration docs](https://eslint.org/docs/user-guide/configuring).

---

### GitHub Actions

[GitHub Actions](https://github.com/features/actions) makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub. Make code reviews, branch management, and issue triaging work the way you want.

**CI workflow file**: [`.github/workflows/ci.yml`](https://github.com/smarlhens/nest7-boilerplate/blob/master/.github/workflows/ci.yml).

---

### Husky

[Husky](https://github.com/typicode/husky) is a package that helps you create Git hooks easily.

**Configuration file**: [`.huskyrc`](https://github.com/smarlhens/nest7-boilerplate/blob/master/.huskyrc).

---

### Lint-staged

[Lint-staged](https://github.com/okonet/lint-staged) is a Node.js script that allows you to run arbitrary scripts against currently staged files.

**Configuration file**: [`.lintstagedrc`](https://github.com/smarlhens/nest7-boilerplate/blob/master/.lintstagedrc).

---

### Prettier

[Prettier](https://prettier.io/) is an opinionated code formatter.

**Configuration file**: [`.prettierrc`](https://github.com/smarlhens/nest7-boilerplate/blob/master/.prettierrc).  
**Ignore file**: [`.prettierignore`](https://github.com/smarlhens/nest7-boilerplate/blob/master/.prettierignore).

For more configuration options and details, see the [configuration docs](https://prettier.io/docs/en/configuration.html).

---

### Travis CI

[Travis CI](https://travis-ci.com/) is a hosted continuous integration service used to build and test software projects hosted at GitHub.

**Travis build file**: [`.travis.yml`](https://github.com/smarlhens/nest7-boilerplate/blob/master/.travis.yml).

For more configuration options and details, see the [configuration docs](https://docs.travis-ci.com/).

---

## Running the app

### development

```bash
npm run start
```

### watch mode

```bash
npm run start:dev
```

### production mode

```bash
npm run start:prod
```

---

## Code scaffolding

Run `nest generate|g <schematic> <name> [options]` to generate a new Nest Element.

---

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

---

## Test

### unit tests

```bash
npm run test
```

### e2e tests

```bash
npm run test:e2e
```

### test coverage

```bash
npm run test:cov
```

---

## Further help

To get more help on the Nest CLI use `nest --help` or go check out the [Nest CLI README](https://github.com/nestjs/nest-cli/blob/master/README.md).

---
