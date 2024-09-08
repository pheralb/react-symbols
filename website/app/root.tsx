import type { ReactNode } from "react";
import type { LinksFunction } from "@vercel/remix";

import {
  json,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { getLatestVersion } from "fast-npm-meta";
import { globals } from "@/globals";

// Styles:
import tailwind from "./styles/globals.css?url";
import { cn } from "./utils";

// Layout:
import Header from "./components/header";
import Footer from "./components/footer";

// Links:
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwind },
];

export async function loader() {
  const metadata = await getLatestVersion(globals.npmPackageName);
  return json({ version: metadata.version });
}

// App Layout:
export function Layout({ children }: { children: ReactNode }) {
  const data = useLoaderData<typeof loader>();
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
          "selection:bg-zinc-300 selection:text-zinc-900 dark:selection:bg-zinc-700 dark:selection:text-zinc-50",
          "scroll-smooth",
        )}
      >
        <Header npmVersion={data.version!} />
        {children}
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
