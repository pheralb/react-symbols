import type { ComponentProps, FC } from "react";
const FluentAddIcon: FC<ComponentProps<"svg">> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M7.833 2a.5.5 0 0 1 .496.432l.004.068.001 4.833h4.835a.5.5 0 0 1 .068.996l-.068.004H8.334l.001 4.833a.5.5 0 0 1-.995.068l-.005-.068V8.333H2.5a.5.5 0 0 1-.067-.995l.067-.005h4.833V2.5a.5.5 0 0 1 .5-.5" />
  </svg>
);
export default FluentAddIcon;
