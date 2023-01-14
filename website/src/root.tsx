import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";

// Styles =>
import custom from "@/styles/custom.css";
import tailwindcss from "@/styles/tailwind.css";
import Footer from "./components/footer";

// Metas =>
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  title: "React-Symbols - A beautiful icons library for React.",
  image: "https://react-symbols.vercel.app/images/og_image.jpg",
  "twitter:image": "https://react-symbols.vercel.app/images/og_image.jpg",
  "twitter:card": "summary_large_image",
  "twitter:creator": "@pheralb_",
  "twitter:site": "@pheralb_",
  "twitter:title": "React Symbols",
  "twitter:description": "A beautiful icons library for React",
});

// Toaster
import { Toaster } from "react-hot-toast";
import Layout from "./layout/layout";

export const links: LinksFunction = () => [
  // Styles =>
  { rel: "stylesheet", href: custom },
  { rel: "stylesheet", href: tailwindcss },
  // Fonts =>
  {
    rel: "preload",
    as: "font",
    href: "/fonts/JetBrainsMono-Regular.woff2",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    as: "font",
    href: "/fonts/Satoshi-Variable.woff2",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  // Icons =>
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/images/apple-touch-icon-180x180.png",
  },
  {
    rel: "icon",
    type: "image/png",
    href: "/images/logo.png",
  },
  // Manifest =>
  { rel: "manifest", href: "/manifest.webmanifest" },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="font-sans leading-5 text-white bg-midnight">
        <Layout>
          <Outlet />
        </Layout>
        <Scripts />
        <LiveReload />
        <ScrollRestoration />
        <Footer />
        <Toaster position="bottom-center" reverseOrder={false} />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body className="font-sans text-white bg-midnight">
        <Layout>
          <div className="flex flex-col items-center justify-center pt-5">
            <h1 className="mb-2 font-medium text-7xl">{caught.status}</h1>
            <p className="mb-6 text-gray-400">{caught.statusText}</p>
          </div>
        </Layout>
        <Scripts />
        <Footer />
      </body>
    </html>
  );
}
