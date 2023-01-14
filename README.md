<div align="center">
<a href="https://react-symbols.vercel.app/">
<img src="website/public/images/banner.png">
</a>

<p></p>

<a href="https://react-symbols.vercel.app/">🔎 Discover</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="#-getting-started">🚀 Getting Started</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="https://twitter.com/pheralb_">🐦 Twitter</a>

![GitHub releases](https://img.shields.io/github/release/pheralb/react-symbols)
![GitHub stars](https://img.shields.io/github/stars/pheralb/react-symbols)
![GitHub issues](https://img.shields.io/github/issues/pheralb/react-symbols)
![GitHub license](https://img.shields.io/github/license/pheralb/react-symbols)
[![Required Node.JS >=16.0.0](https://img.shields.io/static/v1?label=node&message=%20%3E=16.0.0&logo=node.js&color=3f893e)](https://nodejs.org/about/releases)

</div>

## 👋 Introduction

[**React-Symbols**](https://react-symbols.vercel.app/) is a library for React with the icons of the VSCode theme ["Symbols"](https://marketplace.visualstudio.com/items?itemName=miguelsolorio.symbols) by [Miguel Solorio (@miguelsolorio)](https://github.com/miguelsolorio).

## 🎉 Features

- **+100** icons.
- **Lightweight**.
- Ready to use with **Typescript**.
- **SVG optimized** and **minified**.

## 🚀 Getting Started

> 🚧 React-Symbols require **React >=16.8.0**.

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
  <summary>📀 Config for use the library in Remix.</summary>

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

## 📦 Icons

- ✅ [Icons/files](https://github.com/miguelsolorio/vscode-symbols/tree/main/src/icons/files).
- 🧩 [Icons/folders](https://github.com/miguelsolorio/vscode-symbols/tree/main/src/icons/folders).

## 🙌 Contributing

<a href="https://github.com/pheralb/react-symbols/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=pheralb/react-symbols" />
</a>

<p></p>

## 🔑 License

- [MIT](https://github.com/pheralb/react-symbols/blob/main/LICENSE).
