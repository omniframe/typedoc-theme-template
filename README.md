# 📦 __THEME_NAME__: Theme for TypeDoc

This plugin is a theme for TypeDoc built for a richer and more engaging user
experience. We believe that documentation should be as beautiful and readable
as it is useful, and we hope this theme allows other Engineers to take a step
in that direction on their TypeScript projects!

![PREVIEW!](/.repo/preview.png "__THEME_NAME__ for TypeDoc")

## Using __THEME_NAME__

- Install this theme with NPM:

```bash
npm i -D typedoc-theme-__THEME_NAME__
```

- Add the following to your project's `tsconfig.json` file:

```JSON
"typedocOptions": {
  "entryPoints": ["./src/index.ts"],
  "out": "./docs/",
  "theme": "__THEME_NAME__",
  "customCss": "./node_modules/typedoc-theme-__THEME_NAME__/dist/styles/custom.css"
},
```

- Build your docs:

```bash
typedoc
```

