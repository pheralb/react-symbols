<div align="center">
<a href="https://react-symbols.vercel.app/">
<img src="https://i.ibb.co/FVtQNWq/react-symbols-readme-banner.png">
</a>

<p>⚡ React-Symbols is a library for React with the icons of the VSCode theme "<a href="https://github.com/misolori/vscode-symbols" target="_blank">Symbols</a>" by <a href="https://github.com/misolori" target="_blank">Miguel Solorio (@misolori)</a>.</p>

![GitHub releases](https://img.shields.io/github/release/pheralb/react-symbols)
![GitHub stars](https://img.shields.io/github/stars/pheralb/react-symbols)
![GitHub issues](https://img.shields.io/github/issues/pheralb/react-symbols)
![GitHub license](https://img.shields.io/github/license/pheralb/react-symbols)
[![Required Node.JS >=16.0.0](https://img.shields.io/static/v1?label=node&message=%20%3E=16.0.0&logo=node.js&color=3f893e)](https://nodejs.org/about/releases)

</div>

## 🎉 Features

- 📦 +80 icons.
- 🍃 Lightweight.
- 💙 Ready to use with Typescript.
- 🧡 SVG optimized and minified.

## 🚀 Getting Started

### - Installation

```bash
# npm ->
npm install @react-symbols/icons

# pnpm ->
pnpm add @react-symbols/icons

# fnpm ->
fnpm install @react-symbols/icons

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

> ⚠️ If you are using [Remix](https://remix.run/), add in the **remix.config.js**:

```js
module.exports = {
  ...
  serverDependenciesToBundle: ["@react-symbols/icons"], // <-
  ...
};
```

- [Importing ESM Packages - Remix Docs](https://remix.run/docs/en/v1/pages/gotchas#importing-esm-packages).

## 📦 Icons

- ✅ [Icons/files](https://github.com/miguelsolorio/vscode-symbols/tree/main/src/icons/files) - Ready.
- 🧩 [Icons/folders](https://github.com/miguelsolorio/vscode-symbols/tree/main/src/icons/folders) - Working...

## 🙌 Contributing

- ⭐ [Josyto](https://github.com/Josyto).
- ⭐ [pablocdev](https://github.com/pablocdev).

## 🔑 License

- [MIT](https://github.com/pheralb/react-symbols/blob/main/LICENSE).
