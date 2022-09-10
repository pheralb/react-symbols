import { LinksFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';
import styles from 'highlight.js/styles/github-dark-dimmed.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export default function Docs() {
  return (
    <div className="flex justify-center">
      <div className="py-10 prose lg:prose-lg">
        <Outlet />
      </div>
    </div>
  );
}
