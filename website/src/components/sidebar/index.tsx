import type { ReactNode } from "react"
import { NavLink, useLocation } from "@remix-run/react"
import { Folder, FolderOpen, Github, NPM, Symbols } from "@react-symbols/icons"

import SidebarItem from "./item"
import ExternalLink from "../externalLink"

// Custom Icons:
import VSCode from "../icons/vscode"
import Twitter from "../icons/twitter"
import Figma from "../icons/figma"

interface SidebarProps {
  children: ReactNode
}

const iconSidebarSize = 21

const SidebarContent = () => {
  const location = useLocation()
  return (
    <nav className="w-full overflow-y-auto overflow-x-hidden border-b border-neutral-800 md:fixed md:left-0 md:top-0 md:h-full md:w-60 md:border-r md:pb-10">
      <div className="mx-5 flex flex-col pt-7">
        <NavLink to="/">
          <div className="group flex items-center space-x-3 border-b border-neutral-800 pb-3 transition duration-75 hover:text-neutral-300">
            <Symbols className="h-8 w-8 transition duration-700 group-hover:rotate-90" />
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
        <div className="mt-3 flex items-center space-x-1 overflow-x-auto pb-3 md:flex-col md:items-start md:space-x-0 md:space-y-1 md:overflow-y-auto">
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
              text="VSCode"
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
          <ExternalLink href="https://www.figma.com/file/HYLMyRbIdSbIJQlqnd9pSN/Symbols---File-Icons?type=design&node-id=20537-804&t=F5YRpTBiNwKqtOsT-0">
            <SidebarItem
              icon={<Figma width={iconSidebarSize} className="text-indigo-300" />}
              text="Figma"
              external={true}
            />
          </ExternalLink>
        </div>
      </div>
      <div className="hidden items-center justify-center md:flex">
        <div className="fixed bottom-0 mb-4 flex flex-col space-y-1 rounded-xl bg-neutral-800/50 p-3">
          <p className="mb-1 mt-1 text-sm font-medium text-neutral-400">
            ✨ Created by
          </p>
          <ExternalLink
            href="https://twitter.com/pheralb_"
            className="group transition"
          >
            <SidebarItem
              icon={
                <Twitter
                  width={iconSidebarSize}
                  className="transition duration-500 group-hover:-rotate-12"
                />
              }
              text="@pheralb_"
              external={true}
            />
          </ExternalLink>
          <ExternalLink href="https://twitter.com/miguelsolorio_">
            <SidebarItem
              icon={
                <Twitter
                  width={iconSidebarSize}
                  className="transition duration-500 group-hover:-rotate-12"
                />
              }
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
      <div className="mb-12 md:ml-60">{props.children}</div>
    </section>
  )
}

export default Sidebar
