# Node 20 jest `--detect-leaks` issue min-repro

Steps to reproduce:
* Install [volta](https://volta.sh/) (or set the node version in the way you wish)
* Run `npm install && npm run test`: the default node version is `18.18.2`, the tests will pass
* Change the node version to `20.9.0`, the tests will fail, stating `Your test suite is leaking memory`

Here the transpilation is done with `@swc/jest`, but I had similar results with `ts-jest` as well, so it does not look transpiler-specific.

As you'll notice, the code don't even need to be in `.ts` files, the simple transpilation of the `import` statement into `require` seems to be the issue.
