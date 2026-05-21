import type { ComponentProps, FC } from "react";
const FluentErrorIcon: FC<ComponentProps<"svg">> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M8 1.333a6.667 6.667 0 1 1 0 13.334A6.667 6.667 0 0 1 8 1.333m0 1a5.667 5.667 0 1 0 0 11.334A5.667 5.667 0 0 0 8 2.333m2.297 3.265.056.048a.5.5 0 0 1 .049.651l-.048.057L8.707 8l1.646 1.646a.5.5 0 0 1 .049.651l-.048.056a.5.5 0 0 1-.651.049l-.057-.048L8 8.707l-1.646 1.646a.5.5 0 0 1-.651.049l-.057-.048a.5.5 0 0 1-.048-.651l.048-.057L7.293 8 5.646 6.354a.5.5 0 0 1-.048-.651l.048-.057a.5.5 0 0 1 .651-.048l.057.048L8 7.293l1.646-1.647a.5.5 0 0 1 .651-.048" />
  </svg>
);
export default FluentErrorIcon;
