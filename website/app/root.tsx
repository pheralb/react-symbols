import type {
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from "react-router";

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "react-router";
import { getLatestVersion } from "fast-npm-meta";
import { globals } from "@/globals";

// Styles:
import tailwind from "@/styles/globals.css?url";
import sonnerStyles from "sonner/dist/styles.css?url";
import { cn } from "@/utils";

// Layout:
import Header from "@/components/header";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Settings from "@/components/settings";

// Providers:
import CustomToaster from "@/providers/toaster";

// Theme:
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from "remix-themes";
import { themeSessionResolver } from "./sessions.server";
import clsx from "clsx";

// Links:
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwind },
  { rel: "stylesheet", href: sonnerStyles },
  {
    rel: "preload",
    as: "font",
    href: "/fonts/InterVariable.woff2",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    as: "font",
    href: "/fonts/GeistMono.woff2",
    type: "font/woff2",
    crossOrigin: "anonymous",
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
  { rel: "icon", href: "/favicon.ico" },
];

// Metadata:
export const meta: MetaFunction = () => {
  return [
    {
      title:
        "React-Symbols - Beautifully File & Folder Icons for your React projects.",
    },
    {
      property: "og:title",
      content: "React-Symbols",
    },
    {
      name: "description",
      content:
        "Beautifully File & Folder Icons for your React projects. Crafted by Miguel Solorio.",
    },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const metadata = await getLatestVersion(globals.npmPackageName);
  const { getTheme } = await themeSessionResolver(request);
  return {
    version: metadata.version,
    theme: getTheme(),
  };
}

// App Layout:
function App() {
  const data = useLoaderData<typeof loader>();
  const [theme] = useTheme();
  return (
    <html
      lang="en"
      data-theme={theme}
      className={clsx(theme)}
      style={{ colorScheme: clsx(theme) }}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Symbols, VSCode, Icons, Theme, React, Miguel Solorio"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="React-Symbols" />
        <meta
          property="og:description"
          content="Symbols VSCode Icons Theme by Miguel Solorio, for React."
        />
        <meta
          name="image"
          property="og:image"
          content="https://react-symbols.vercel.app/images/og.png"
        />
        <meta property="og:image:width" content="1977" />
        <meta property="og:image:height" content="1231" />
        <meta property="og:url" content="https://react-symbols.vercel.app/" />
        <meta property="og:site_name" content="React-Symbols" />
        <meta name="author" content="@pheralb_" />
        <meta
          name="twitter:image"
          content="https://react-symbols.vercel.app/images/og.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@pheralb_" />
        <meta name="twitter:site" content="@pheralb_" />
        <meta name="twitter:title" content="React-Symbols" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Links />
      </head>
      <body
        className={cn(
          "font-sans antialiased",
          "bg-zinc-50 text-black dark:bg-zinc-900 dark:text-white",
          "selection:bg-zinc-300 selection:text-zinc-900 dark:selection:bg-zinc-700 dark:selection:text-zinc-50",
          "relative",
        )}
      >
        <Header npmVersion={data.version!} />
        <Settings />
        <Navbar />
        <Outlet />
        <Footer />
        <CustomToaster />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>();
  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
      <App />
    </ThemeProvider>
  );
}
