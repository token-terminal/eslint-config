# eslint-config
Our eslint config

## usage:
Add the dev dependencies to your `package.json`, and run `yarn`:
```json
...
"devDependencies": {
  "prettier": "^1.18.2",
  "eslint": "^6.5.1",
  "@saulx/eslint-config": "https://github.com/atelier-saulx/eslint-config"
}
...
```
Add a `.prettierrc` file to your project root:
```json
{
  "singleQuote": true,
  "semi": false
}
```
And add a `eslintrc.json` to your project root:
```json
{
  "extends": "@saulx/eslint-config"
}
```
