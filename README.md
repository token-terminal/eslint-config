# eslint-config

Our eslint config. Use it with our prettier config.

## Usage

Add the following to your `package.json`:

```json
"prettier": "@token-terminal/prettier-config",
"eslintConfig": {
  "extends": "@token-terminal/eslint-config"
},
"devDependencies": {
  "eslint": "^6.5.1",
  "prettier": "^1.18.2",
  "@token-terminal/eslint-config": "https://github.com/token-terminal/eslint-config",
  "@token-terminal/prettier-config": "https://github.com/token-terminal/prettier-config"
}
```

Install the dependencies:

```sh
yarn install
```
