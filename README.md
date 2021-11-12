# 📦 typedoc-theme-template

A template repository for creating custom Typedoc themes. This repo is used by
the [`create-typedoc-theme`](https://github.com/) package to generate a starter
project for your themes.

## Installation

Either fork this repo, or run the following command:

```bash
npm init typedoc-theme
```

## Creating the theme

Before you dive in, be sure to familiarize yourself with the following
structural concepts. This will help you hit the ground running and get your
theme up in no time!

### Layouts

Layouts represent whole HTML pages. They return a JSX element where the top-most
tag is `<html>`. They are used to manage view's resources and setup its overall
structure.

So far, there seems to only be one layout, which is the default layout (
[`default.tsx`](src/themes/__THEME_NAME__/layouts/default.tsx)).

### Partials

Partials are where most of your changes will be. They represent specific
components, such as `header.tsx` or `footer.tsx`, and are overridden in your
[`RenderContext`](src/themes/__THEME_NAME__/__THEME_NAME__ThemeRenderContext.tsx).

### Templates

Templates represent the main body of content in a given view. The two included
in the default theme are [`index.tsx`](src/themes/__THEME_NAME__/templates/index.tsx)
and [`reflection.tsx`](src/themes/__THEME_NAME__/templates/reflection.tsx). The
latter is used for class/enum/type/etc. details views and the former is used
everywhere else.

## Using the theme

Once you're ready to publish your theme, you may do so by running the following
command:

```bash
npm version {major|minor|patch}
npm run build
npm publish
```

Then, in the repository with your TypeDoc documentation, run:

```bash
npm i -D my-custom-theme
```

Add the following to your `tsconfig.json` file:

```JSON
"typedocOptions": {
  "entryPoints": ["./src/index.ts"],
  "out": "./docs/",
  "theme": "my-custom-theme",
  "customCss": "./node_modules/my-custom-theme/dist/styles/custom.css"
},
```
