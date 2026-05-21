import type { ComponentProps, FC } from "react";
const FluentSymbolSnippetIcon: FC<ComponentProps<"svg">> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M5 4.571a.429.429 0 0 0 0 .858h6a.429.429 0 1 0 0-.858zm-.429 3c0-.236.192-.428.429-.428h3.429a.429.429 0 1 1 0 .857H5a.43.43 0 0 1-.429-.429M5 9.714a.429.429 0 0 0 0 .857h6a.429.429 0 1 0 0-.857zm9-5.571C14 2.959 13.04 2 11.857 2H4.143C2.959 2 2 2.96 2 4.143v7.714C2 13.041 2.96 14 4.143 14h7.714C13.041 14 14 13.04 14 11.857zM4.143 2.857h7.714c.71 0 1.286.576 1.286 1.286v7.714c0 .71-.576 1.286-1.286 1.286H4.143c-.71 0-1.286-.576-1.286-1.286V4.143c0-.71.576-1.286 1.286-1.286" />
  </svg>
);
export default FluentSymbolSnippetIcon;
