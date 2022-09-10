import { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Link } from 'react-router-dom';

import * as gettingStarted from './getting-started.mdx';

function docsFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ''),
    ...mod.attributes.meta
  };
}

export const loader: LoaderFunction = () => {
  return [docsFromModule(gettingStarted)];
};

const Docs = () => {
  const docsFiles = useLoaderData();
  return (
    <div>
      Docs:
      {docsFiles.map((doc: any) => (
        <div key={doc.slug}>
          <Link to={doc.slug}>{doc.title}</Link>
          {doc.description ? <p>{doc.description}</p> : null}
        </div>
      ))}
    </div>
  );
};

export default Docs;
