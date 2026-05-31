import type { ComponentProps, FC } from "react";
const FluentBellDotIcon: FC<ComponentProps<"svg">> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M12 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 8v1.271l.902 2.062H3.104L4 9.27V6.33a3.99 3.99 0 0 1 4.357-3.984c.153-.336.351-.648.587-.927A5 5 0 0 0 8 1.331c-2.765 0-5 2.23-5 5v2.732l-.914 2.105a.833.833 0 0 0 .764 1.165H6l.003.119A2 2 0 0 0 10 12.334h3.156a.833.833 0 0 0 .764-1.168L13 9.062V7.874q-.481.125-1 .126m-5 4.334 2-.001-.005.098A1 1 0 0 1 7 12.334"
    />
  </svg>
);
export default FluentBellDotIcon;
