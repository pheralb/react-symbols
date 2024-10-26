import type { ComponentProps, FC } from "react";

const MongoDB: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#22C55E"
      d="M14.03 4.23a36.71 36.71 0 01-1.998-2.218.049.049 0 00-.063 0A36.744 36.744 0 019.97 4.229c-8.416 9.189 1.326 15.39 1.326 15.39l.081.047c.073.957.255 2.334.255 2.334h.726s.182-1.37.254-2.334l.082-.055c.009 0 9.751-6.193 1.335-15.382zm-2.034 15.25s-.436-.32-.554-.483v-.016l.527-10.006c0-.03.054-.03.054 0l.527 10.006v.016c-.118.163-.554.482-.554.482z"
    ></path>
  </svg>
);

export default MongoDB;
