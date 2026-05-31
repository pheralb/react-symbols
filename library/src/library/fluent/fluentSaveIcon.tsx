import type { ComponentProps, FC } from "react";
const FluentSaveIcon: FC<ComponentProps<"svg">> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M2 3.833C2 2.821 2.82 2 3.833 2h6.643c.575 0 1.126.228 1.532.635l1.357 1.357c.407.406.635.957.635 1.532v6.643C14 13.179 13.18 14 12.167 14H3.833A1.833 1.833 0 0 1 2 12.167zM3.833 3A.833.833 0 0 0 3 3.833v8.334c0 .46.373.833.833.833H4V9.5A1.5 1.5 0 0 1 5.5 8h5A1.5 1.5 0 0 1 12 9.5V13h.167c.46 0 .833-.373.833-.833V5.524c0-.31-.123-.606-.342-.825l-1.357-1.357a1.17 1.17 0 0 0-.634-.326v1.817a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5V3zM11 13V9.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V13zM5.667 3v1.833a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V3z" />
  </svg>
);
export default FluentSaveIcon;
