import type { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
}

const Container = (props: ContainerProps) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {props.children}
    </div>
  )
}

export default Container
