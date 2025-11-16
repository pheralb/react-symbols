import type { ComponentProps, FC } from "react";

const Solidity: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#A855F7"
      fillRule="evenodd"
      d="M14.529 3l-2.843 4.924h5.686L14.529 3z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#7E22CE"
      fillRule="evenodd"
      d="M11.686 7.924L14.529 3H8.843l2.843 4.924z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#6B21A8"
      fillRule="evenodd"
      d="M8.843 3L6 7.924h5.686L8.843 3z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#A855F7"
      fillRule="evenodd"
      d="M8.843 12.813L6 7.89h5.686l-2.843 4.924zM8.843 21l2.843-4.924H6L8.843 21z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#7E22CE"
      fillRule="evenodd"
      d="M11.686 16.076L8.843 21h5.686l-2.843-4.924z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#6B21A8"
      fillRule="evenodd"
      d="M14.529 21l2.843-4.924h-5.686L14.529 21z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#A855F7"
      fillRule="evenodd"
      d="M14.529 11.187l2.843 4.924h-5.686l2.843-4.924z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default Solidity;
