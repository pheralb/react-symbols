import type { ComponentProps, FC } from "react";
const FluentCancelIcon: FC<ComponentProps<"svg">> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="m2.931 3.036.049-.056a.5.5 0 0 1 .65-.049l.057.049L8 7.293l4.313-4.313a.5.5 0 1 1 .707.707L8.707 8l4.313 4.313a.5.5 0 0 1 .049.651l-.049.056a.5.5 0 0 1-.65.049l-.057-.049L8 8.707 3.687 13.02a.5.5 0 1 1-.707-.707L7.293 8 2.98 3.687a.5.5 0 0 1-.049-.651l.049-.056z" />
  </svg>
);
export default FluentCancelIcon;
