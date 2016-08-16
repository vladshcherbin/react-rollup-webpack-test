# React Rollup & Webpack Test

This is just a skeleton react app for bundler tests and comparison.

## Usage

Terminal commands:

- Rollup build (located in `build/rollup.js`):

```sh
npm run build:rollup
```

- Webpack build (located in `build/webpack.js`):

```sh
npm run build:webpack
```

- both builds

```sh
npm run build
```

## Current status

Default skeleton bundle size:

| Bundler | Version | Size |
| --- | --- | --- |
| rollup | 0.34.9 | 156 kb |
| webpack | 2.1.0-beta.20 | 146 kb |

- Rollup build size is bigger by 10 kb.
- Can't use react-router with rollup.
  - Uncomment the line in `app/index.js` file and run the build command.
- Tree shaking is under a question
