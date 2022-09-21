import { Icons } from '@/data/icons';
import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';
import { NPM } from '@react-symbols/icons';
import toast from 'react-hot-toast';

export const loader: LoaderFunction = async () => {
  return json(Icons);
};

interface IconData {
  name: string;
  iconPath: string;
}

export default function Index() {
  const iconsData = useLoaderData();

  const copyToClipboard = async (txt: string) => {
    try {
      const clipboardItem = new ClipboardItem({
        'text/plain': new Blob([txt], { type: 'text/plain' })
      });
      await navigator.clipboard.write([clipboardItem]);
    } catch (error) {
      await navigator.clipboard.writeText(txt);
    }
    toast('Copied to clipboard!');
  };

  return (
    <>
      <div className="p-12 bg-black border-b-2 border-[#2562ea]">
        <div className="flex flex-col items-center justify-center pt-5 pb-5">
          <h1 className="mb-5 font-sans text-6xl font-bold">
            A beautiful icons library for React
          </h1>
          <p className="text-gray-400">
            📦 with Symbols icons by{' '}
            <a
              href="https://twitter.com/miguelsolorio_"
              target="_blank"
              className="underline"
            >
              Miguel Solorio
            </a>
          </p>
          <div className="flex p-3 mt-4 rounded-md bg-zinc-900 cursor-poiner">
            <NPM width="26px" className="mr-2" />
            <p>npm i @react-symbols/icons</p>
          </div>
        </div>
      </div>
      <div className="container px-4 py-1 mx-auto">
        <div className="grid grid-cols-1 gap-4 p-12 mx-auto sm:grid-cols-2 lg:grid-cols-6">
          {iconsData.map((icon: IconData) => (
            <div
              key={icon.iconPath}
              title={`Copy ${icon.name} to clipboard`}
              className="flex flex-col items-center justify-center py-4 transition-all border rounded-md cursor-pointer border-zinc-800 hover:-translate-y-1 hover:border-[#c085fd]"
              onClick={() => copyToClipboard(icon.name)}
            >
              <img src={icon.iconPath} alt="icon" className="w-16 h-16" />
              <p className="font-light text-gray-300">{icon.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
