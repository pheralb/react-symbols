import type { ComponentProps, FC } from "react";
const FluentStopIcon: FC<ComponentProps<"svg">> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M12.833 3c.092 0 .167.075.167.167v9.666a.167.167 0 0 1-.167.167H3.167A.167.167 0 0 1 3 12.833V3.167C3 3.075 3.075 3 3.167 3zM3.167 2C2.522 2 2 2.522 2 3.167v9.666C2 13.478 2.522 14 3.167 14h9.666c.645 0 1.167-.522 1.167-1.167V3.167C14 2.522 13.478 2 12.833 2z" />
  </svg>
);
export default FluentStopIcon;
