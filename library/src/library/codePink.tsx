import type { ComponentProps, FC } from "react";

const CodePink: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      stroke="#F472B6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.778 8.519 3 12.297l3.778 3.779M17.222 8.519 21 12.297l-3.778 3.779M9.271 18.595 14.73 6"
    />
  </svg>
);

export default CodePink;
