import type { iCommand } from "@/types/command.type"
import { NPM, PNPM, Yarn } from "@react-symbols/icons"

const size = 20

export const commands: iCommand[] = [
  {
    package: "npm",
    command: "npm install @react-symbols/icons",
    icon: <NPM width={size} />,
  },
  {
    package: "pnpm",
    command: "pnpm install @react-symbols/icons",
    icon: <PNPM width={size} />,
  },
  {
    package: "yarn",
    command: "yarn add @react-symbols/icons",
    icon: <Yarn width={size} />,
  },
]
