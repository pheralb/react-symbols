import type { ComponentProps, FC } from "react";

const Lock: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#64748B"
      fillRule="evenodd"
      d="M7 10h10a3 3 0 013 3v5a3 3 0 01-3 3H7a3 3 0 01-3-3v-5a3 3 0 013-3zm0 2a1 1 0 00-1 1v5a1 1 0 001 1h10a1 1 0 001-1v-5a1 1 0 00-1-1H7z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#64748B"
      fillRule="evenodd"
      d="M16.269 4.932c-.915-1.32-2.588-1.857-3.916-1.924-1.4-.071-3.2.336-4.368 1.833-.495.635-.703 1.407-.81 1.987a12.12 12.12 0 00-.173 1.987c-.01.713.02 1.462.07 2.185h2.005c-.147-1.99-.132-4.137.486-4.93 1.265-1.623 4.218-1.217 5.062 0 .422.61.422 2.847.316 4.93h2.002c.04-.8.064-1.627.055-2.39a15.629 15.629 0 00-.111-1.83c-.06-.447-.188-1.227-.618-1.848z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default Lock;
