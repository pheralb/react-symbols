import type { ComponentProps, FC } from "react";
const FluentUnlockIcon: FC<ComponentProps<"svg">> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M8 1.336c1.25 0 2.223.804 2.618 2.002a.5.5 0 1 1-.95.314C9.402 2.842 8.79 2.336 8 2.336c-.938 0-1.613.639-1.664 1.7l-.003.13v1.167h5.5A1.5 1.5 0 0 1 13.33 6.73l.003.103v6.33a1.5 1.5 0 0 1-1.397 1.498l-.103.003H4.167a1.5 1.5 0 0 1-1.497-1.397l-.003-.103v-6.33a1.5 1.5 0 0 1 1.397-1.497l.103-.004h1.166V4.166c0-1.692 1.14-2.83 2.667-2.83m3.833 4.997H4.167a.5.5 0 0 0-.496.432l-.004.068v6.33a.5.5 0 0 0 .432.496l.068.005h7.666a.5.5 0 0 0 .496-.432l.004-.068v-6.33a.5.5 0 0 0-.432-.496zM8 9a.999.999 0 1 1 0 1.999A.999.999 0 0 1 8 9" />
  </svg>
);
export default FluentUnlockIcon;
