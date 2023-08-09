import type { ReactNode } from "react"

interface GridProps {
  children: ReactNode
}

const Grid = (props: GridProps) => {
  return (
    <div className="mx-auto mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
      {props.children}
    </div>
  )
}

export default Grid
