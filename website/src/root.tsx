import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react';

// Styles =>
import custom from '@/styles/custom.css';
import tailwindcss from '@/styles/tailwind.css';
import Header from './components/header';

// Metas =>
export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
  title: 'React-Symbols - A beautifully icons library for React.'
});

export const links: LinksFunction = () => [
  // Styles =>
  { rel: 'stylesheet', href: custom },
  { rel: 'stylesheet', href: tailwindcss },
  // Fonts =>
  {
    rel: 'preload',
    as: 'font',
    href: '/fonts/JetBrainsMono-Regular.woff2',
    type: 'font/woff2',
    crossOrigin: 'anonymous'
  },
  {
    rel: 'preload',
    as: 'font',
    href: '/fonts/Inter.woff2',
    type: 'font/woff2',
    crossOrigin: 'anonymous'
  },
  // Icons =>
  { rel: 'icon', href: '/images/favicon.ico' },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/images/apple-touch-icon-180x180.png'
  },
  {
    rel: 'icon',
    type: 'image/png',
    href: '/images/logo.png'
  },
  // Manifest =>
  { rel: 'manifest', href: '/manifest.webmanifest' }
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="font-sans text-white bg-midnight">
        <Header />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
