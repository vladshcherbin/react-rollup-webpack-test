# React Rollup & Webpack Test

A simple React app for bundler tree-shaking comparison.

## Current status

Bundle size (skeleton & with unused `Link` from `react-router` package):

| Bundler | Version | Contents | Size |
| --- | --- | --- | --- |
| rollup | 0.41.4 | react 15.4.2 | 131 kb |
| rollup | 0.41.4 | react 15.4.2 + router 3.0.1 | 172 kb |
| webpack | 2.2.0-rc.7 | react 15.4.2  | 142 kb |
| webpack | 2.2.0-rc.7 | react 15.4.2 + router 3.0.1 | 186 kb |

- Tree shaking doesn't remove unused router package.
- Rollup bundle file is 11kb / 14kb less.
- React-router needs a config fix with rollup.
  - Current fix is to specify namedExports - [link](https://github.com/rollup/rollup/issues/855).
- There are [uglify warnings](uglify-warnings) if `warnings: true` option is set in the config file.

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
