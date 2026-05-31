import type { ComponentProps, FC } from "react";
const FluentRefreshIcon: FC<ComponentProps<"svg">> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M8 3a5 5 0 1 0 4.946 4.262c-.045-.303.177-.595.483-.595a.5.5 0 0 1 .501.415A6 6 0 1 1 12 3.528v-.695a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.9A4.98 4.98 0 0 0 8 3" />
  </svg>
);
export default FluentRefreshIcon;
