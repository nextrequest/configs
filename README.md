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

Make sure to merge in the latest code changes into main before running the following steps:

1. Create a new branch
2. Then run the lerna publish command. Lerna will automatically detect any new changes since the last version release.

ref: https://lerna.js.org/docs/features/version-and-publish

```
npx lerna publish
```

3. Make sure the new version is pushed into the new branch
4. Request a PR reviewer and once approved, merge the new version into `main`
