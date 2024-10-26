import type { ComponentProps, FC } from "react";

const AngularModule: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#EA580C"
      d="M20.03 5.97l-.614 9.642-5.87-12.643 6.484 3zm-4.066 12.467l-4.436 2.532-4.436-2.532.902-2.186h7.068l.902 2.186zm-4.436-10.67l2.324 5.652H9.203l2.325-5.651zm-7.895 7.845L3.026 5.97 9.51 2.969 3.633 15.612z"
    ></path>
  </svg>
);

export default AngularModule;
