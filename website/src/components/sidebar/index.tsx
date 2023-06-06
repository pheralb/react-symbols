import type { ReactNode } from "react"
import { NavLink, useLocation } from "@remix-run/react"
import { Folder, FolderOpen, Github, NPM } from "@react-symbols/icons"

import SidebarItem from "./item"
import ExternalLink from "../externalLink"
import VSCode from "../icons/vscode"
import Twitter from "../icons/twitter"

interface SidebarProps {
  children: ReactNode
}

const iconSidebarSize = 21

const SidebarContent = () => {
  const location = useLocation()
  return (
    <nav className="fixed left-0 top-0 h-full w-60 overflow-y-auto overflow-x-hidden border-r border-neutral-800 pb-10">
      <div className="mx-5 flex flex-col pt-7">
        <NavLink to="/">
          <div className="flex items-center space-x-3 border-b border-neutral-800 pb-3 transition-colors duration-75 hover:text-neutral-300">
            <img src="/images/favicon.ico" alt="logo" className="h-8 w-8" />
            <span className="text-xl font-medium tracking-wider">
              React-Symbols
            </span>
          </div>
        </NavLink>
        <div className="mt-3 flex flex-col space-y-1 border-b border-neutral-800 pb-3">
          <NavLink to="/">
            <SidebarItem
              icon={
                location.pathname === "/" ? (
                  <FolderOpen width={iconSidebarSize} />
                ) : (
                  <Folder width={iconSidebarSize} />
                )
              }
              text="Files"
              active={location.pathname === "/"}
            />
          </NavLink>
          <NavLink to="/folders">
            <SidebarItem
              icon={
                location.pathname === "/folders" ? (
                  <FolderOpen width={iconSidebarSize} />
                ) : (
                  <Folder width={iconSidebarSize} />
                )
              }
              text="Folders"
              active={location.pathname === "/folders"}
            />
          </NavLink>
        </div>
        <div className="mt-3 flex flex-col space-y-1 pb-3">
          <ExternalLink href="https://github.com/pheralb/react-symbols">
            <SidebarItem
              icon={<Github width={iconSidebarSize} />}
              text="GitHub"
              external={true}
            />
          </ExternalLink>
          <ExternalLink href="https://marketplace.visualstudio.com/items?itemName=miguelsolorio.symbols">
            <SidebarItem
              icon={<VSCode width={iconSidebarSize} />}
              text="VSCode Theme"
              external={true}
            />
          </ExternalLink>
          <ExternalLink href="https://www.npmjs.com/package/@react-symbols/icons">
            <SidebarItem
              icon={<NPM width={iconSidebarSize} />}
              text="npm"
              external={true}
            />
          </ExternalLink>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="fixed bottom-0 mb-4 flex flex-col space-y-1 rounded-xl bg-neutral-800/50 p-3">
          <p className="mb-1 mt-1 text-sm font-medium text-neutral-400">
            ✨ Created by
          </p>
          <ExternalLink href="https://twitter.com/pheralb_">
            <SidebarItem
              icon={<Twitter width={iconSidebarSize} />}
              text="@pheralb_"
              external={true}
            />
          </ExternalLink>
          <ExternalLink href="https://twitter.com/miguelsolorio_">
            <SidebarItem
              icon={<Twitter width={iconSidebarSize} />}
              text="@miguelsolorio_"
              external={true}
            />
          </ExternalLink>
        </div>
      </div>
    </nav>
  )
}

const Sidebar = (props: SidebarProps) => {
  return (
    <section className="min-h-screen">
      <SidebarContent />
      <div className="mb-12 ml-60">{props.children}</div>
    </section>
  )
}

export default Sidebar
