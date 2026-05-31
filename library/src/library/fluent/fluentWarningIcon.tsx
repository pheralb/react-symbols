import type { ComponentProps, FC } from "react";
const FluentWarningIcon: FC<ComponentProps<"svg">> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M7.273 1.855a1.5 1.5 0 0 1 1.984.493l.055.092 5.173 9.339a1.5 1.5 0 0 1-1.21 2.223l-.103.004H2.83a1.5 1.5 0 0 1-1.361-2.131l.048-.096 5.17-9.339a1.5 1.5 0 0 1 .586-.585m6.337 10.409-5.173-9.34a.5.5 0 0 0-.837-.058l-.038.059-5.17 9.339a.5.5 0 0 0 .373.738l.064.004h10.343a.5.5 0 0 0 .465-.685zl-5.173-9.34zM8 10.668a.666.666 0 1 1 0 1.331.666.666 0 0 1 0-1.331m-.002-5.002a.5.5 0 0 1 .495.432l.005.068.002 3.001a.5.5 0 0 1-.995.069L7.5 9.168l-.002-3.001a.5.5 0 0 1 .5-.5z" />
  </svg>
);
export default FluentWarningIcon;
