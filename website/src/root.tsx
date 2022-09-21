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
import Footer from './components/footer';

// Metas =>
export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
  title: 'React-Symbols - A beautiful icons library for React.',
  image: 'https://react-symbols.vercel.app/images/og_image.jpg',
  'twitter:image': 'https://react-symbols.vercel.app/images/og_image.jpg',
  'twitter:card': 'summary_large_image',
  'twitter:creator': '@pheralb_',
  'twitter:site': '@pheralb_',
  'twitter:title': 'React Symbols',
  'twitter:description': 'A beautiful icons library for React'
});

// Toaster
import { Toaster } from 'react-hot-toast';

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
      <body className="font-sans text-white bg-zinc-900">
        <Header />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Footer />
        <Toaster position="bottom-center" reverseOrder={false} />
      </body>
    </html>
  );
}
