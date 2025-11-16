<div align="center">
<a href="https://react-symbols.vercel.app/">
<img src="https://raw.githubusercontent.com/pheralb/react-symbols/main/website/public/images/og.png" alt="React-Symbols Screenshot" />
</a>

<p></p>

<a href="https://react-symbols.vercel.app">Website</a>
<span>&nbsp;&nbsp;❖&nbsp;&nbsp;</span>
<a href="#-getting-started">Getting Started</a>
<span>&nbsp;&nbsp;❖&nbsp;&nbsp;</span>
<a href="#-license">License</a>
<span>&nbsp;&nbsp;❖&nbsp;&nbsp;</span>
<a href="#-contribute">Contribute</a>
<span>&nbsp;&nbsp;❖&nbsp;&nbsp;</span>
<a href="https://marketplace.visualstudio.com/items?itemName=miguelsolorio.symbols">VSCode Theme</a>

![React Badge](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat)
![SWC Badge](https://img.shields.io/badge/SWC-F8C457?logo=swc&logoColor=000&style=flat)
[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fpheralb%2Freact-symbols%2Fbadge%3Fref%3Dmain&style=flat)](https://actions-badge.atrox.dev/pheralb/react-symbols/goto?ref=main)
![GitHub releases](https://img.shields.io/github/release/pheralb/react-symbols)
![GitHub stars](https://img.shields.io/github/stars/pheralb/react-symbols)
![GitHub issues](https://img.shields.io/github/issues/pheralb/react-symbols)
![GitHub license](https://img.shields.io/github/license/pheralb/react-symbols)

</div>

## 🧑‍🚀 Introduction

[**React-Symbols**](https://react-symbols.vercel.app/) is a library for React with the icons of the VSCode theme [**Symbols**](https://marketplace.visualstudio.com/items?itemName=miguelsolorio.symbols) created by [Miguel Solorio (@miguelsolorio)](https://github.com/miguelsolorio):

- 📦 **+100** files & folders icons.
- ☁️ Support for **React Server Components** (RSC).
- 🍃 **Lightweight** & **tree-shakable**.
- 💙 Built with **Typescript**.
- 🚀 **SVG optimized** and **minified**.

## 🚀 Getting Started

> React-Symbols require **React >=16.8.0**.

### - Install

```bash
# with npm:
npm install @react-symbols/icons

# with pnpm:
pnpm add @react-symbols/icons

# with yarn:
yarn add @react-symbols/icons

# with bun:
bun add @react-symbols/icons
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

> 💿 Config for use the library with [**Remix Old Compiler**](https://remix.run/) if you are using CJS (v1 uses CJS by default, v2 uses ESM):

```js
// Add in the remix.config.js:
module.exports = {
  ...
  serverDependenciesToBundle: ["@react-symbols/icons"],
  ...
};
```

> ✍️ Change the name of the icon:

```jsx
import { Bun as BunIcon } from "@react-symbols/icons";

const MyComponent = () => {
  return (
    <>
      <BunIcon width={128} height={128} />
    </>
  );
};

export default MyComponent;
```

## 📦 Stack

This is a monorepo project created with:

**For monorepo:**

- [`create-turbo`](https://www.npmjs.com/package/create-turbo) Turborepo CLI.
- [`pnpm`](https://pnpm.io/) + [pnpm workspaces](https://pnpm.io/workspaces) - Fast, disk space efficient package manager.
- [Prettier](https://prettier.io/) - Opinionated code formatter.
- [Sherif](https://github.com/QuiiBz/sherif) - Opinionated, zero-config linter for JavaScript monorepos.

**For library:**

- [SWC](https://swc.rs/) - Rust-based platform for the Web.
- [React 19](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Typescript](https://www.typescriptlang.org/) - TypeScript is JavaScript with syntax for types.

**For website:**

- [React Router v7](https://reactrouter.com/) - Create modern, resilient user experiences with web fundamentals.
- [Typescript](https://www.typescriptlang.org/) - TypeScript is JavaScript with syntax for types.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.
- [tw-animate-css](https://github.com/Wombosvideo/tw-animate-css) - A collection of Tailwind CSS v4.0 utilities for creating beautiful animations.
- [shadcn/ui + Radix UI](https://ui.shadcn.com/) - An opinionated toast component for React.
- [Sonner](https://sonner.emilkowal.ski/) - An opinionated toast component for React.

## 🙌 Contribute

1. [Fork the repository](https://github.com/pheralb/react-symbols/fork) and clone it:

```bash
git clone git@github.com:YOUR_USERNAME/react-symbols.git
```

2. Install the dependencies:

```bash
# Install pnpm globally if you don't have it:
npm install -g pnpm

# Install the dependencies:
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

and open [**localhost:5173**](http://localhost:5173) with your browser to see the website 🚀

<a href="https://github.com/pheralb/react-symbols/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=pheralb/react-symbols" />
</a>

<p></p>

## 🔑 License

- [MIT License](https://github.com/pheralb/react-symbols/blob/main/LICENSE).
