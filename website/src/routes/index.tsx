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
      <div className="pt-6 pb-6 bg-black border-b-2 border-[#2562ea]">
        <div className="flex flex-col items-center justify-center pt-1 pb-5 lg:pt-5">
          <Show>
            <h1 className="mb-5 font-sans text-2xl font-bold text-center lg:text-6xl">
              A beautiful icons library for React
            </h1>
          </Show>
          <Show delay={0.1}>
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
            <div
              className="flex p-3 mt-4 mb-2 rounded-md cursor-pointer bg-zinc-900 cursor-poiner hover:bg-zinc-800"
              onClick={() => copyToClipboard("npm i @react-symbols/icons")}
            >
              <NPM width="26px" className="mr-2" />
              <p>npm i @react-symbols/icons</p>
            </div>
          </Show>
        </div>
      </div>
      <div className="container px-4 py-1 mx-auto">
        <div className="grid grid-cols-1 gap-4 p-12 mx-auto sm:grid-cols-2 lg:grid-cols-6">
          {Icons.sort((iconA, iconB) => (iconA.name > iconB.name ? 1 : -1)).map(
            ({ name, icon: Icon }: IconData) => (
              <div
                key={name}
                title={`Copy ${name} to clipboard`}
                className="flex flex-col items-center justify-center py-4 border rounded-md cursor-pointer border-zinc-800 hover:-translate-y-1 transition-all hover:border-[#c085fd]"
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
