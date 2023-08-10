import type { ReactNode } from "react"
import { toast } from "sonner"

import useCopyToClipboard from "@/hooks/useCopyToClipboard"

interface CardProps {
  name: string
  icon: ReactNode
}

const Card = (props: CardProps) => {
  const [value, copy] = useCopyToClipboard()

  const copyToClipboard = async (txt: string) => {
    copy(txt)
    toast("Copied to clipboard!", {
      icon: "✨",
      description: `${txt}`,
      onAutoClose: () => copy(""),
    })
  }

  return (
    <div
      title={`Copy ${props.name} to clipboard`}
      className="bg-midgnight flex transform cursor-pointer flex-col items-center justify-center rounded-md border border-neutral-800 py-3 transition duration-200 ease-in-out hover:border-neutral-800 hover:bg-neutral-800/40"
      onClick={() => copyToClipboard(`<${props.name} />`)}
    >
      {props.icon}
      <p className="mt-2 font-medium text-gray-300">
        {value ? "Copied!" : props.name}
      </p>
    </div>
  )
}

export default Card
