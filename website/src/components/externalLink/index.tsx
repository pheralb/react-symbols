import type { ReactNode } from "react"

interface Props {
  href: string
  children: ReactNode
  className?: string
}

const ExternalLink = (props: Props) => {
  return (
    <a href={props.href} rel="noreferrer" target="_blank">
      {props.children}
    </a>
  )
}

export default ExternalLink
