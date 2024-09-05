import type { ReactNode } from "react";
import type { LinksFunction } from "@vercel/remix";

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

// Styles:
import tailwind from "./styles/globals.css?url";
import { cn } from "./utils";

// Links:
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwind },
];

// App Layout:
export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body
        className={cn(
          "font-sans antialiased",
          "bg-zinc-50 text-black dark:bg-zinc-900 dark:text-white",
          "scroll-smooth",
        )}
      >
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
