import type { ComponentProps, FC } from "react";
const FluentBellIcon: FC<ComponentProps<"svg">> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M8 1.33c2.7 0 4.905 2.13 4.997 4.833l.003.168v2.731l.92 2.104a.833.833 0 0 1-.764 1.167L10 12.334a2 2 0 0 1-3.997.118L6 12.332l-3.15.001a.835.835 0 0 1-.764-1.165L3 9.063V6.33c0-2.77 2.235-5 5-5m1 11.003-2 .001a1 1 0 0 0 1.995.097zM8 2.33c-2.213 0-4 1.783-4 4v2.94l-.896 2.062h9.798L12 9.271V6.34l-.002-.15A3.99 3.99 0 0 0 8 2.331z" />
  </svg>
);
export default FluentBellIcon;
