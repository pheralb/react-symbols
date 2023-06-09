import type { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
}

const Container = (props: ContainerProps) => {
  return <div className="container mx-auto px-4">{props.children}</div>
}

export default Container
