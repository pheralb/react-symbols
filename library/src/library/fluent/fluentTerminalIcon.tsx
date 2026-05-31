import type { ComponentProps, FC } from "react";
const FluentTerminalIcon: FC<ComponentProps<"svg">> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M11.833 2C13.03 2 14 2.97 14 4.167v7.666C14 13.03 13.03 14 11.833 14H4.167A2.167 2.167 0 0 1 2 11.833V4.167C2 2.97 2.97 2 4.167 2zm0 1H4.167C3.522 3 3 3.522 3 4.167v7.666C3 12.478 3.522 13 4.167 13h7.666c.645 0 1.167-.522 1.167-1.167V4.167C13 3.522 12.478 3 11.833 3" />
    <path d="M6.646 11.02a.5.5 0 0 1 0-.707L8.96 8 6.646 5.687a.5.5 0 0 1 .708-.707l2.666 2.666a.5.5 0 0 1 0 .708L7.354 11.02a.5.5 0 0 1-.708 0" />
  </svg>
);
export default FluentTerminalIcon;
