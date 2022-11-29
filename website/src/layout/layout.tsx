import React from "react";
import Header from "@/components/header";
import LayoutLink from "@/components/layoutLink";
import { Folder, NPM, Github, CodeSky } from "@react-symbols/icons";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <nav className="sticky z-40 w-full border-b md:border-r md:overflow-y-auto md:overflow-x-hidden md:pb-10 md:h-full md:w-56 md:left-0 md:top-0 md:fixed bg-midnight border-neutral-800">
        <div className="flex flex-col px-4 mt-7 md:mt-0 md:py-7">
          <div className="flex items-center pb-4 mb-3 space-x-2 border-b border-neutral-800 hover:text-gray-500">
            <img src="/images/logo.png" alt="logo" className="mr-1 w-7 h-7" />
            <h3 className="text-xl font-medium">React-Symbols</h3>
          </div>
          <div className="mb-2 border-b border-neutral-800">
            <LayoutLink to="/">
              <Folder width="20px" />
              <span className="font-medium text-md">Files</span>
            </LayoutLink>
            <LayoutLink to="/folders">
              <Folder width="20px" />
              <span className="font-medium text-md">Folders</span>
            </LayoutLink>
          </div>
          <a
            href="https://www.npmjs.com/package/@react-symbols/icons"
            target="_blank"
            rel="noreferrer"
            className="flex items-center px-2 py-2 mb-2 space-x-2 transition-all duration-150 rounded-md hover:bg-zinc-800"
          >
            <NPM width="20px" />
            <span className="font-medium text-md">npm</span>
          </a>
          <a
            href="https://github.com/pheralb/react-symbols"
            target="_blank"
            rel="noreferrer"
            className="flex items-center px-2 py-2 mb-2 space-x-2 transition-all duration-150 rounded-md hover:bg-zinc-800"
          >
            <Github width="20px" />
            <span className="font-medium text-md">Repository</span>
          </a>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=miguelsolorio.symbols"
            target="_blank"
            rel="noreferrer"
            className="flex items-center px-2 py-2 mb-2 space-x-2 transition-all duration-150 rounded-md hover:bg-zinc-800"
          >
            <CodeSky width="20px" />
            <span className="font-medium text-md">VSCode Theme</span>
          </a>
        </div>
      </nav>
      <div className="ml-0 md:ml-56">
        <div className="flex flex-col pl-5 pr-5 mt-3 mb-4 lg:mt-10 lg:mb-10 lg:pl-0 lg:pr-0">
          <div className="container py-1 pl-5 pr-5 mx-auto mb-6 lg:pl-0 lg:pr-0">
            <Header />
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
