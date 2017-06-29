# React Rollup & Webpack Tree-Shaking Test

A simple app test case for tree-shaking comparison.

## Current status

Bundle size (bare app and with unused `Link` from `react-router-dom` package):

| Bundler | Version | Contents | Size |
| --- | --- | --- | --- |
| rollup | 0.43.0 | react 15.6.1 | 131 kb |
| rollup | 0.43.0 | react 15.6.1 + react-router 4.1.1 | 170 kb |
| webpack | 3.0.0 | react 15.6.1  | 146 kb |
| webpack | 3.0.0 | react 15.6.1 + react-router 4.1.1 | 186 kb |

## Results

- Neither Rollup nor Webpack can't remove unused `react-router-dom` package.
- Rollup bundle file is 15kb / 16kb less.
- Webpack 3.0.0 Scope Hoisting feature reduced the file by 1kb. Yaaay

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
