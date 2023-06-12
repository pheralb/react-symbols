import { useState } from "react"

import type { iCommand } from "@/types/command.type"
import { commands } from "@/data/command"

import { Popover, PopoverContent, PopoverTrigger } from "../popover"
import Container from "../container"
import ExternalLink from "../externalLink"
import Copy from "../icons/copy"
import { toast } from "sonner"
import ExternalArrow from "../icons/externalArrow"
import useCopyToClipboard from "@/hooks/useCopyToClipboard"

const Hero = () => {
  const [value, copy] = useCopyToClipboard()
  const [popoverOpen, setPopoverOpen] = useState(false)

  const handleCopy = (command: iCommand) => {
    copy(command.command)
    setPopoverOpen(false)
    toast("Copied to clipboard!", {
      icon: command.icon,
      description: `${command.command}`,
    })
  }

  return (
    <header
      aria-label="Page Header"
      className="bg-neutral-900 py-6 sm:py-12 lg:py-20"
    >
      <Container>
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col space-y-4 text-center sm:text-left">
            <h1 className="text-2xl font-medium text-neutral-100 sm:text-4xl">
              Files & folders icons by Miguel Solorio
            </h1>
            <div className="flex items-center justify-between rounded-md border border-neutral-800 p-2">
              <div className="flex items-center space-x-1">
                <span>📦</span>
                <p className="cursor-copy text-neutral-300 font-mono">
                  {value ?? commands[0].command}
                </p>
              </div>
              <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                <PopoverTrigger>
                  <Copy className="h-4 w-4 text-neutral-300" />
                </PopoverTrigger>
                <PopoverContent className="w-44">
                  {commands.map((command) => (
                    <button
                      key={command.package}
                      className="flex w-full cursor-default items-center space-x-2 p-2 text-sm hover:bg-neutral-800/60"
                      onClick={() => handleCopy(command)}
                    >
                      <span>{command.icon}</span>
                      <span className="text-neutral-300">
                        {command.package}
                      </span>
                    </button>
                  ))}
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="mt-2 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center md:mt-4">
            <ExternalLink href="https://github.com/pheralb/react-symbols#-getting-started">
              <div className="group inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900 px-5 py-3 transition hover:bg-neutral-800/50 focus:outline-none focus:ring">
                <span className="text-sm font-medium">Getting Started</span>
                <ExternalArrow className="inline-block h-4 w-4 text-neutral-300 transition-transform duration-300 group-hover:translate-x-0.5" />
              </div>
            </ExternalLink>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Hero
