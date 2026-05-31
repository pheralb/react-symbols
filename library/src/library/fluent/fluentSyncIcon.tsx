import type { ComponentProps, FC } from "react";
const FluentSyncIcon: FC<ComponentProps<"svg">> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M10.834 3.453a.5.5 0 0 0 .094.701 4.834 4.834 0 0 1-2.4 8.65l.452-.45a.5.5 0 0 0-.651-.756l-.056.048-1.334 1.334a.5.5 0 0 0-.048.65l.048.057 1.334 1.333a.5.5 0 0 0 .755-.65l-.048-.057-.5-.5A5.834 5.834 0 0 0 11.534 3.36a.5.5 0 0 0-.7.094zM7.02.98a.5.5 0 0 0 0 .707l.5.5a5.834 5.834 0 0 0-3.233 10.312.5.5 0 1 0 .637-.77A4.834 4.834 0 0 1 7.47 3.195l-.45.45a.5.5 0 1 0 .707.708L9.061 3.02a.5.5 0 0 0 0-.707L7.727.98a.5.5 0 0 0-.707 0" />
  </svg>
);
export default FluentSyncIcon;
