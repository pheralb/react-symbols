import type { LinksFunction } from "@remix-run/node"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"

// Global Providers:
import { Toaster } from "sonner"

// Global CSS:
import stylesheet from "@/styles/globals.css"

// Global Sidebar:
import Sidebar from "./components/sidebar"
import Hero from "./components/hero"

// Link CSS:
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
]

// Root Component:
export default function App() {
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
