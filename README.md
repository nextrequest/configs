# `@nextrequestco/configs`

## NextRequest module configuration presets

## Installation

```
npm install | yarn add @nextrequestco/commitlint-config@latest
npm install | yarn add @nextrequestco/eslint-config@latest
npm install | yarn add @nextrequestco/prettier-config@latest
npm install | yarn add @nextrequestco/typescript-config@latest
```

## Updating release version

1. Create a new branch
2. cd into the correct package you want to update. For example `configs/packages/typescript-config` then run the lerna publish command.

ref: https://lerna.js.org/docs/features/version-and-publish

```
npx lerna publish
```

3. Make sure the new version is pushed into the new branch
4. Request a PR reviewer and once approved, merge the new version into `main`
