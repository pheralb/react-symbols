import { Icons } from "@/data/icons";
import Show from "@/motions/show";
import { NPM } from "@react-symbols/icons";
import type { ComponentProps, FC } from "react";
import toast from "react-hot-toast";

interface IconData {
  name: string;
  icon: FC<ComponentProps<"svg">>;
}

export default function Index() {
  const copyToClipboard = async (txt: string) => {
    try {
      const clipboardItem = new ClipboardItem({
        "text/plain": new Blob([txt], { type: "text/plain" }),
      });
      await navigator.clipboard.write([clipboardItem]);
    } catch (error) {
      await navigator.clipboard.writeText(txt);
    }
    toast("Copied to clipboard!", {
      icon: "🥳",
      style: {
        borderRadius: "10px",
        background: "#121212",
        color: "#fff",
      },
    });
  };

  return (
    <>
      <div className="pt-7">
        <div className="flex flex-col items-center justify-center pt-1 pb-5 lg:pt-5">
          <Show delay={0.2}>
            <h1 className="mb-5 font-sans text-4xl font-bold lg:text-6xl">
              A beautiful icons library for React
            </h1>
          </Show>
          <Show delay={0.4}>
            <p className="text-gray-400">
              🖌️ Icons designed by
              <a
                href="https://twitter.com/miguelsolorio_"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 underline"
              >
                Miguel Solorio
              </a>
            </p>
          </Show>
          <Show delay={0.6}>
            <div className="relative mt-8 mb-4 group">
              <div className="absolute  rounded-lg opacity-75 -inset-0.5  blur-xl bg-gradient-to-r from-blue-800 to-indigo-800 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <button
                className="relative flex items-center py-4 leading-none bg-black divide-x divide-gray-600 rounded-lg cursor-pointer px-7"
                onClick={() => copyToClipboard("npm i @react-symbols/icons")}
                title="Copy command :)"
              >
                <NPM width="40px" className="pr-3" />
                <span className="pl-3 text-gray-300 transition duration-400 group-hover:text-gray-100">
                  npm install @react-symbols/icons
                </span>
              </button>
            </div>
          </Show>
        </div>
      </div>
      <div className="container py-1 mx-auto">
        <div className="grid grid-cols-1 gap-4 p-12 mx-auto sm:grid-cols-2 lg:grid-cols-6">
          {Icons.sort((iconA, iconB) => (iconA.name > iconB.name ? 1 : -1)).map(
            ({ name, icon: Icon }: IconData) => (
              <div
                key={name}
                title={`Copy ${name} to clipboard`}
                className="flex flex-col items-center justify-center py-4 transition duration-200 ease-in-out transform border-2 rounded-md cursor-pointer bg-midgnight hover:bg-midnightLight border-zinc-900 hover:border-indigo-900"
                onClick={() => copyToClipboard(name)}
              >
                <Icon className="w-16 h-16" />
                <p className="font-light text-gray-300">{name}</p>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
