import type { FC, SVGProps } from "react";

export interface ExtensionType {
  [extension: string]: FC<SVGProps<SVGSVGElement>>;
}
