# @x12i/basic-auth usage example

Small Node.js package for creating and validating encrypted app authorization keys.

This consuming application demonstrates **create and verify a temporary application authorization key** using the published npm package, pinned to `1.0.1`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- A consumer needs the following capability: Small Node.js package for creating and validating encrypted app authorization keys.
- A Basic integration needs to reuse the capabilities of @x12i/basic-auth inside a larger application.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/basic-auth)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
