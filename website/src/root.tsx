import type { LinksFunction, V2_MetaFunction } from "@remix-run/node"

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react"

// Global Providers:
import { Toaster } from "sonner"

// Global CSS:
import stylesheet from "@/styles/globals.css"

// Global Sidebar:
import Sidebar from "./components/sidebar"
import Hero from "./components/hero"
import ArrowLeft from "./components/icons/arrowLeft"

// Link CSS:
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  {
    rel: 'preload',
    as: 'font',
    href: '/fonts/GeneralSans-Variable.woff2',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'preload',
    as: 'font',
    href: '/fonts/Hack.woff2',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/images/apple-touch-icon-180x180.png",
  },
  {
    rel: "icon",
    type: "image/svg+xml",
    sizes: "32x32",
    href: "/images/logo_svg.svg",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/images/logo.png",
  },
  { rel: "manifest", href: "/manifest.webmanifest" },
  { rel: "icon", href: "/images/favicon.ico" },
]

// Meta tags:
export const meta: V2_MetaFunction = () => {
  return [
    { title: "React-Symbols" },
    {
      property: "og:title",
      content: "React-Symbols",
    },
    {
      name: "description",
      content: "Symbols VSCode Icons Theme by Miguel Solorio, for React.",
    },
  ];
};

// Root Component:
export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="keywords" content="Symbols, VSCode, Icons, Theme, React, Miguel Solorio" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="React-Symbols" />
        <meta property="og:description" content="Symbols VSCode Icons Theme by Miguel Solorio, for React." />
        <meta name="image" property="og:image" content="https://react-symbols.vercel.app/images/og.png" />
        <meta property="og:image:width" content="1894" />
        <meta property="og:image:height" content="971" />
        <meta property="og:url" content="https://react-symbols.vercel.app/" />
        <meta property="og:site_name" content="React-Symbols" />
        <meta name="author" content="@pheralb_" />
        <meta
          name="twitter:image"
          content="https://react-symbols.vercel.app/images/og.png"
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta name="twitter:creator" content="@pheralb_" />
        <meta name="twitter:site" content="@pheralb_" />
        <meta name="twitter:title" content="React-Symbols" />
        <Meta />
        <Links />
      </head>
      <body className="bg-neutral-900 font-sans text-neutral-100 antialiased">
        <Sidebar>
          <Hero />
          <Outlet />
        </Sidebar>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Toaster
          theme="dark"
          position="bottom-right"
          toastOptions={{
            style: { background: "#171717" },
            className: "font-sans text-md tracking-wide",
          }}
        />
      </body>
    </html>
  )
}

// Custom error 4xx/5xx Page:
export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body className="bg-neutral-900 font-sans text-neutral-100 antialiased">
          <Sidebar>
            <Hero />
            <div className="flex flex-col space-y-2 items-center justify-center">
              <div className="flex flex-col space-y-2 pb-3 items-center border-b border-neutral-700 mb-2">
                <h1 className="text-4xl font-semibold">Error</h1>
                <p className="text-xl">{error.status}</p>
                <p className="font-mono">{error.statusText}</p>
              </div>
              <a href="/" className="flex items-center space-x-2 hover:underline duration-75">
                <ArrowLeft width={20} />
                <span>Go Home</span>
              </a>
            </div>
            <Outlet />
          </Sidebar>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
  return null;
}