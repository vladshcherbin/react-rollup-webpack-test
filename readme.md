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

Bundle size (skeleton & with unused `Link` from `react-router` package):

| Bundler | Version | Contents | Size |
| --- | --- | --- | --- |
| rollup | 0.34.9 | react 15.3.0 | 156 kb |
| rollup | 0.34.9 | react 15.3.0  + router 3.0.0-alpha.3 | 199 kb |
| webpack | 2.1.0-beta.20 | react 15.3.0  | 146 kb |
| webpack | 2.1.0-beta.20 | react 15.3.0  + router 3.0.0-alpha.3 | 188 kb |

- Rollup build size is bigger by 10 kb.
- Can't use react-router with rollup.
  - Uncomment the line in `app/index.js` file and run the build command.
  - Current is to specify namedExports - [link](https://github.com/rollup/rollup/issues/855).
- Tree shaking is under a question
