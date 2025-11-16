import type { ComponentProps, FC } from "react";

const Haskell: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#A855F7"
      d="M2 19.109l4.706-7.055L2 5h3.53l4.705 7.055-4.706 7.054H2z"
    ></path>
    <path
      fill="#C084FC"
      d="M6.706 19.109l4.706-7.055L6.706 5h3.53l9.41 14.109h-3.528l-2.941-4.41-2.942 4.41h-3.53z"
    ></path>
    <path
      fill="#A855F7"
      d="M18.078 14.994l-1.568-2.352H22v2.352h-3.922zm-2.352-3.527l-1.57-2.352H22v2.352h-6.274z"
    ></path>
  </svg>
);

export default Haskell;
