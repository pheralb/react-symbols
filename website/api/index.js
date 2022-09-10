var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// node_modules/highlight.js/styles/github-dark-dimmed.css
var require_github_dark_dimmed = __commonJS({
  "node_modules/highlight.js/styles/github-dark-dimmed.css"(exports, module2) {
    module2.exports = "/build/_assets/github-dark-dimmed-NVKMPVQH.css";
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// src/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
      context: remixContext,
      url: request.url
    }, void 0, !1, {
      fileName: "src/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// src/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// src/styles/globals.css
var globals_default = "/build/_assets/globals-IBQRXQRY.css";

// src/root.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "React-Symbols",
  viewport: "width=device-width,initial-scale=1"
}), links = () => [
  { rel: "stylesheet", href: globals_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
            fileName: "src/root.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Links, {}, void 0, !1, {
            fileName: "src/root.tsx",
            lineNumber: 32,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "src/root.tsx",
        lineNumber: 30,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
            fileName: "src/root.tsx",
            lineNumber: 35,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
            fileName: "src/root.tsx",
            lineNumber: 36,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
            fileName: "src/root.tsx",
            lineNumber: 37,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
            fileName: "src/root.tsx",
            lineNumber: 38,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "src/root.tsx",
        lineNumber: 34,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "src/root.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// src/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
      className: "text-6xl font-bold text-red-700",
      children: "Hello World!"
    }, void 0, !1, {
      fileName: "src/routes/index.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "src/routes/index.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// src/routes/docs.tsx
var docs_exports = {};
__export(docs_exports, {
  default: () => Docs,
  links: () => links2
});
var import_react3 = require("@remix-run/react"), import_github_dark_dimmed = __toESM(require_github_dark_dimmed()), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links2 = () => [{ rel: "stylesheet", href: import_github_dark_dimmed.default }];
function Docs() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex justify-center",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "py-10 prose lg:prose-lg",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
        fileName: "src/routes/docs.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "src/routes/docs.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "src/routes/docs.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// mdx:routes\docs\getting-started.mdx
var getting_started_exports = {};
__export(getting_started_exports, {
  attributes: () => attributes,
  default: () => getting_started_default,
  filename: () => filename,
  headers: () => headers,
  meta: () => meta2
});
var import_react4 = __toESM(require("react")), attributes = {
  title: "Getting Started",
  date: new Date(16422912e5),
  meta: {
    title: "Getting Started",
    description: "Install & usage React-Symbols."
  }
};
function MDXContent(props = {}) {
  let _components = Object.assign({
    h2: "h2",
    ul: "ul",
    li: "li",
    h3: "h3",
    pre: "pre",
    code: "code",
    span: "span",
    a: "a"
  }, props.components), { wrapper: MDXLayout } = _components, _content = /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement(_components.h2, null, "\u{1F389} Features"), `
`, /* @__PURE__ */ import_react4.default.createElement(_components.ul, null, `
`, /* @__PURE__ */ import_react4.default.createElement(_components.li, null, "\u{1F4E6} +40 icons."), `
`, /* @__PURE__ */ import_react4.default.createElement(_components.li, null, "\u{1F343} Lightweight."), `
`, /* @__PURE__ */ import_react4.default.createElement(_components.li, null, "\u{1F499} Ready to use with Typescript."), `
`, /* @__PURE__ */ import_react4.default.createElement(_components.li, null, "\u{1F9E1} SVG optimized and minified."), `
`), `
`, /* @__PURE__ */ import_react4.default.createElement(_components.h2, null, "\u{1F680} Getting Started"), `
`, /* @__PURE__ */ import_react4.default.createElement(_components.h3, null, "- Installation"), `
`, /* @__PURE__ */ import_react4.default.createElement(_components.pre, null, /* @__PURE__ */ import_react4.default.createElement(_components.code, {
    className: "hljs language-bash"
  }, /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# npm ->"), `\r
npm install @react-symbols/icons\r
\r
`, /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# snpm ->"), `\r
snpm install @react-symbols/icons\r
\r
`, /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# pnpm ->"), `\r
pnpm add @react-symbols/icons\r
\r
`, /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-comment"
  }, "# yarn ->"), `\r
yarn add @react-symbols/icons
`)), `
`, /* @__PURE__ */ import_react4.default.createElement(_components.h3, null, "- Usage"), `
`, /* @__PURE__ */ import_react4.default.createElement(_components.pre, null, /* @__PURE__ */ import_react4.default.createElement(_components.code, {
    className: "hljs language-jsx"
  }, /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "import"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-title class_"
  }, "React"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "from"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'react'"), `;\r
`, /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "import"), " { ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-title class_"
  }, "Angular"), ", ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-title class_"
  }, "Astro"), ", ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-title class_"
  }, "Document"), " } ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "from"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-string"
  }, "'@react-symbols/icons'"), `;\r
\r
`, /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "const"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-title function_"
  }, "MyComponent"), " = (", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-params"
  }), `) => {\r
  `, /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "return"), ` (\r
    `, /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "xml"
  }, /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-tag"
  }, "<>"), `\r
      `, /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-tag"
  }, "<", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-name"
  }, "Angular"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "width"), "=", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-string"
  }, "{128}"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "height"), "=", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-string"
  }, "{128}"), " />"), `\r
      `, /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-tag"
  }, "<", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-name"
  }, "Astro"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "width"), "=", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-string"
  }, "{128}"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "height"), "=", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-string"
  }, "{128}"), " />"), `\r
      `, /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-tag"
  }, "<", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-name"
  }, "Document"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "width"), "=", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-string"
  }, "{128}"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-attr"
  }, "height"), "=", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-string"
  }, "{128}"), " />"), `\r
    `, /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-tag"
  }, "</>")), `\r
  );\r
};\r
\r
`, /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "export"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-keyword"
  }, "default"), " ", /* @__PURE__ */ import_react4.default.createElement(_components.span, {
    className: "hljs-title class_"
  }, "MyComponent"), `;
`)), `
`, /* @__PURE__ */ import_react4.default.createElement(_components.h2, null, "\u{1F511} License"), `
`, /* @__PURE__ */ import_react4.default.createElement(_components.ul, null, `
`, /* @__PURE__ */ import_react4.default.createElement(_components.li, null, /* @__PURE__ */ import_react4.default.createElement(_components.a, {
    href: "https://github.com/pheralb/react-symbols/blob/main/LICENSE"
  }, "MIT"), "."), `
`));
  return MDXLayout ? /* @__PURE__ */ import_react4.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var getting_started_default = MDXContent, filename = "getting-started.mdx", headers = typeof attributes < "u" && attributes.headers, meta2 = typeof attributes < "u" && attributes.meta;

// src/routes/docs/index.tsx
var docs_exports2 = {};
__export(docs_exports2, {
  default: () => docs_default,
  loader: () => loader
});
var import_react5 = require("@remix-run/react"), import_react_router_dom = require("react-router-dom");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function docsFromModule(mod) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta
  };
}
var loader = () => [docsFromModule(getting_started_exports)], Docs2 = () => {
  let docsFiles = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      "Docs:",
      docsFiles.map((doc) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_router_dom.Link, {
            to: doc.slug,
            children: doc.title
          }, void 0, !1, {
            fileName: "src/routes/docs/index.tsx",
            lineNumber: 25,
            columnNumber: 11
          }, this),
          doc.description ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            children: doc.description
          }, void 0, !1, {
            fileName: "src/routes/docs/index.tsx",
            lineNumber: 26,
            columnNumber: 30
          }, this) : null
        ]
      }, doc.slug, !0, {
        fileName: "src/routes/docs/index.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this))
    ]
  }, void 0, !0, {
    fileName: "src/routes/docs/index.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}, docs_default = Docs2;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "6ddec45b", entry: { module: "/build/entry.client-F2UXNRIH.js", imports: ["/build/_shared/chunk-ZPCS4TSQ.js", "/build/_shared/chunk-3NC2IN5N.js", "/build/_shared/chunk-IQ4A4ZBO.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-UKWPJLIR.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/docs": { id: "routes/docs", parentId: "root", path: "docs", index: void 0, caseSensitive: void 0, module: "/build/routes/docs-5GBDY6I6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/docs/getting-started": { id: "routes/docs/getting-started", parentId: "routes/docs", path: "getting-started", index: void 0, caseSensitive: void 0, module: "/build/routes/docs/getting-started-NK2LEYYF.js", imports: ["/build/_shared/chunk-W62VIGQ6.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/docs/index": { id: "routes/docs/index", parentId: "routes/docs", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/docs/index-CPOTIO76.js", imports: ["/build/_shared/chunk-W62VIGQ6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-2BXKR7CQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-6DDEC45B.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/docs": {
    id: "routes/docs",
    parentId: "root",
    path: "docs",
    index: void 0,
    caseSensitive: void 0,
    module: docs_exports
  },
  "routes/docs/getting-started": {
    id: "routes/docs/getting-started",
    parentId: "routes/docs",
    path: "getting-started",
    index: void 0,
    caseSensitive: void 0,
    module: getting_started_exports
  },
  "routes/docs/index": {
    id: "routes/docs/index",
    parentId: "routes/docs",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: docs_exports2
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
