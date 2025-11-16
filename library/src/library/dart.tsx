import type { ComponentProps, FC } from "react";

const Dart: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m14.4683 3.59153 3.0794 3.0794L6.41714 6.0794l5.68376-2.84252C12.3589 3.08205 12.7586 3 13.1662 3c.4737 0 1.0335.32157 1.3021.59153ZM6.41583 15.6709c0 .9502.1191 1.1831.59153 1.6582l.47375.4737h.00001L10.6783 21h7.4609l.0001-3.1972h-.0001l-5.2099-5.9206-6.51347-5.80279v9.59149Z"
      fill="#38BDF8"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.41583 6.07812h9.47377c.6524 0 1.1248.05823 1.6568.59154l3.79 3.79004v7.3418h-3.1971L6.41583 6.07812ZM3.92796 14.2497l3.0794 3.0794-.59153-11.24969L3.5733 12c-.10189.2144-.23687.5889-.23687.8284 0 .5174.22629 1.0468.59153 1.4213Z"
      fill="#075985"
    />
  </svg>
);

export default Dart;
