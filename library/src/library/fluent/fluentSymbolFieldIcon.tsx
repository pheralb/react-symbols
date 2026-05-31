import type { ComponentProps, FC } from "react";
const FluentSymbolFieldIcon: FC<ComponentProps<"svg">> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M5.6 11.2v1.2a2 2 0 0 0 2 2h4.8a2 2 0 0 0 2-2V7.6a2 2 0 0 0-2-2h-1.2v.8h1.2a1.2 1.2 0 0 1 1.2 1.2v4.8a1.2 1.2 0 0 1-1.2 1.2H7.6a1.2 1.2 0 0 1-1.2-1.2v-1.2zm-4-7.6a2 2 0 0 1 2-2h4.8a2 2 0 0 1 2 2v4.8a2 2 0 0 1-2 2H3.6a2 2 0 0 1-2-2z" />
  </svg>
);
export default FluentSymbolFieldIcon;
