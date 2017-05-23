# React Rollup & Webpack Test

A simple app test case for tree-shaking comparison.

## Current status

Bundle size (bare app and with unused `Link` from `react-router-dom` package):

| Bundler | Version | Contents | Size |
| --- | --- | --- | --- |
| rollup | 0.41.6 | react 15.5.4 | 129 kb |
| rollup | 0.41.6 | react 15.5.4 + react-router 4.1.1 | 167 kb |
| webpack | 2.6.0 | react 15.5.4  | 142 kb |
| webpack | 2.6.0 | react 15.5.4 + react-router 4.1.1 | 183 kb |

- Neither Rollup nor Webpack can't remove unused `react-router-dom` package.
- Rollup bundle file is 13kb / 16kb less.

## Usage

Console commands:

- Rollup build (saved as `build/rollup.js`):

```sh
npm run build:rollup
```

- Webpack build (saved as `build/webpack.js`):

```sh
npm run build:webpack
```

- both builds

```sh
npm run build
```
