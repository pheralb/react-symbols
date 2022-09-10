import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react';

// TailwindCSS Styles =>
import styles from '@/styles/globals.css';

// Metas =>
export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'React-Symbols',
  viewport: 'width=device-width,initial-scale=1'
  
});

// Import CSS  =>
export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles }
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
