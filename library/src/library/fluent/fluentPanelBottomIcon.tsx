import type { ComponentProps, FC } from "react";
const FluentPanelBottomIcon: FC<ComponentProps<"svg">> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M1 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v6h12V4a1 1 0 0 0-1-1zm-1 8v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1z" />
  </svg>
);
export default FluentPanelBottomIcon;
