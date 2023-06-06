import type { ReactNode } from "react"
import ExternalArrow from "../icons/externalArrow"

interface SidebarItemProps {
  text: string
  icon?: ReactNode
  external?: boolean
}

const SidebarItem = (props: SidebarItemProps) => {
  return (
    <div className="group flex w-full items-center space-x-3 rounded p-2 duration-75 hover:bg-neutral-800">
      <span>{props.icon}</span>
      <div className="flex items-center space-x-1 transition">
        <span>{props.text}</span>
        {props.external && (
          <span>
            <ExternalArrow className="inline-block h-4 w-4 text-neutral-500 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        )}
      </div>
    </div>
  )
}

export default SidebarItem
