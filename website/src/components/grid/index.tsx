import type { ReactNode } from "react"

interface GridProps {
  children: ReactNode
}

const Grid = (props: GridProps) => {
  return (
    <div className="grid-cols-fill mx-auto grid gap-4">{props.children}</div>
  )
}

export default Grid
