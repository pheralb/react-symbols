import type { ReactNode } from "react"
import { useState } from "react"
import { toast } from "sonner"
import useCopyToClipboard from "@/hooks/useCopyToClipboard"
import { lower } from "@/utils/lower"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/tooltip"
import { Button, buttonVariants } from "@/components/button"
import ExternalLink from "@/components/externalLink"

import Copy from "@/components/icons/copy"
import Check from "@/components/icons/check"
import Code from "@/components/icons/code"

type Category = "folders" | "icon"
interface CardProps {
  name: string
  category: Category
  icon: ReactNode
}

const Card = (props: CardProps) => {
  const [copy] = useCopyToClipboard()
  const [isCopied, setIsCopied] = useState<Boolean>(false)

  const copyToClipboard = async (txt: string) => {
    copy(txt)
    setIsCopied(true)
    toast("Copied to clipboard!", {
      icon: <Copy className="h-5 w-5 text-neutral-300" />,
      description: `${txt}`,
      onAutoClose: () => setIsCopied(false),
    })
  }

  return (
    <div className="bg-midgnight flex transform flex-col items-center justify-center rounded-md border border-neutral-800 py-3 transition duration-200 ease-in-out hover:border-neutral-800 hover:bg-neutral-800/40">
      <div className="flex flex-col space-y-1 items-center justify-center mb-2 mt-1">
        {props.icon}
        <p>{props.name}</p>
      </div>
      <div className="flex items-center">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => copyToClipboard(`<${props.name} />`)}
              >
                {isCopied ? (
                  <Check className="h-5 w-5 text-neutral-300" />
                ) : (
                  <Copy className="h-5 w-5 text-neutral-300" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Copy to clipboard</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <ExternalLink
                href={
                  props.category === "folders"
                    ? `https://github.com/pheralb/react-symbols/blob/main/library/src/library/folders/${lower(
                        props.name,
                      )}.tsx`
                    : `https://github.com/pheralb/react-symbols/blob/main/library/src/library/${lower(
                        props.name,
                      )}.tsx`
                }
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
              >
                <Code className="h-5 w-5 text-neutral-300" />
              </ExternalLink>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Check code</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}

export default Card
