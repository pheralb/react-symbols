import type { ComponentProps, FC } from "react";
const FluentLightbulbIcon: FC<ComponentProps<"svg">> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="m10.359 12.666-.194.839a1.5 1.5 0 0 1-1.346 1.157l-.115.004H7.296a1.5 1.5 0 0 1-1.431-1.05l-.03-.112-.194-.838zM8 1.334a4.833 4.833 0 0 1 4.833 4.833c0 1.425-.623 2.73-1.843 3.894a.17.17 0 0 0-.047.083l-.352 1.522H5.409l-.35-1.522a.17.17 0 0 0-.048-.083c-1.22-1.165-1.844-2.47-1.844-3.894A4.833 4.833 0 0 1 8 1.334" />
  </svg>
);
export default FluentLightbulbIcon;
