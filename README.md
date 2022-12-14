<div align="center">
<a href="https://react-symbols.vercel.app/">
<img src="website/public/images/banner.png">
</a>

<p></p>

<a href="https://react-symbols.vercel.app/">๐ Discover</a>
<span>&nbsp;&nbsp;โข&nbsp;&nbsp;</span>
<a href="#-getting-started">๐ค Contribute</a>
<span>&nbsp;&nbsp;โข&nbsp;&nbsp;</span>
<a href="https://twitter.com/pheralb_">๐ฆ Twitter</a>

![GitHub releases](https://img.shields.io/github/release/pheralb/react-symbols)
![GitHub stars](https://img.shields.io/github/stars/pheralb/react-symbols)
![GitHub issues](https://img.shields.io/github/issues/pheralb/react-symbols)
![GitHub license](https://img.shields.io/github/license/pheralb/react-symbols)
[![Required Node.JS >=16.0.0](https://img.shields.io/static/v1?label=node&message=%20%3E=16.0.0&logo=node.js&color=3f893e)](https://nodejs.org/about/releases)

</div>

## ๐ค About

**โก React-Symbols** is a library for React with the icons of the VSCode theme ["Symbols"](https://marketplace.visualstudio.com/items?itemName=miguelsolorio.symbols) by [Miguel Solorio (@miguelsolorio)](https://github.com/miguelsolorio).

## ๐ Features

- ๐ฆ +90 icons.
- ๐ Lightweight.
- ๐ Ready to use with Typescript.
- ๐งก SVG optimized and minified.

## ๐ Getting Started

> ๐ง React-Symbols require **React >=16.8.0**.

### - Install

```bash
# npm ->
npm install @react-symbols/icons

# pnpm ->
pnpm add @react-symbols/icons

# ultra ->
ultra install @react-symbols/icons

# yarn ->
yarn add @react-symbols/icons
```

### - Usage

```jsx
import { Angular, Astro, Document } from "@react-symbols/icons";

const MyComponent = () => {
  return (
    <>
      <Angular width={128} height={128} />
      <Astro width={128} height={128} />
      <Document width={128} height={128} />
    </>
  );
};

export default MyComponent;
```

<details>
  <summary>๐ Config for use the library in Remix.</summary>


```js
// Add in the remix.config.js:

module.exports = {
  ...
  serverDependenciesToBundle: ["@react-symbols/icons"], // <-
  ...
};
```

- [Importing ESM Packages - Remix Docs](https://remix.run/docs/en/v1/pages/gotchas#importing-esm-packages).
</details>

## ๐ฆ Icons

- โ [Icons/files](https://github.com/miguelsolorio/vscode-symbols/tree/main/src/icons/files) - Ready.
- ๐งฉ [Icons/folders](https://github.com/miguelsolorio/vscode-symbols/tree/main/src/icons/folders) - Ready.

## ๐ Contributing

- [Josyto](https://github.com/Josyto).
- [pablocdev](https://github.com/pablocdev).

## ๐ License

- [MIT](https://github.com/pheralb/react-symbols/blob/main/LICENSE).
