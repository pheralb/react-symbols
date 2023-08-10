import type { ReactNode } from "react"
import { toast } from "sonner"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/tooltip"

import useCopyToClipboard from "@/hooks/useCopyToClipboard"
import Copy from "../icons/copy"

interface CardProps {
  name: string
  icon: ReactNode
}

const Card = (props: CardProps) => {
  const [value, copy] = useCopyToClipboard()

  const copyToClipboard = async (txt: string) => {
    copy(txt)
    toast("Copied to clipboard!", {
      icon: <Copy className="h-5 w-5 text-neutral-300" />,
      description: `${txt}`,
      onAutoClose: () => copy(""),
    })
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div
            className="bg-midgnight flex transform cursor-pointer flex-col items-center justify-center rounded-md border border-neutral-800 py-3 transition duration-200 ease-in-out hover:border-neutral-800 hover:bg-neutral-800/40"
            onClick={() => copyToClipboard(`<${props.name} />`)}
          >
            {props.icon}
            <p className="mt-2 font-medium text-gray-300">
              {value ? "Copied!" : props.name}
            </p>
          </div>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Copy "{props.name}" to clipboard</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default Card
