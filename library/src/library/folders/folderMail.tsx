import type { ComponentProps, FC } from "react";

const FolderMail: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ isolation: "isolate" }}
    viewBox="0 0 24 24"
    {...props}
  >
    <defs>
      <clipPath id="a">
        <path d="M0 0h24v24H0z"></path>
      </clipPath>
    </defs>
    <g clipPath="url(#a)">
      <path
        fill="#64748B"
        fillRule="evenodd"
        d="M5 4a3 3 0 00-3 3v10a3 3 0 003 3h8v-2H5a1 1 0 01-1-1V7a1 1 0 011-1h2.784c.231 0 .456.08.635.227l2.393 1.966a3 3 0 001.904.682H19a1 1 0 011 1V10h2v-.125a3 3 0 00-3-3h-6.284c-.231 0-.456-.08-.635-.227L9.688 4.682A3 3 0 007.784 4H5z"
      ></path>
      <g fill="#F87171">
        <path d="M14.1 14.419v4.045c0 .781.633 1.415 1.414 1.415h7.072c.781 0 1.414-.634 1.414-1.415v-4.045l-4.209 2.59c-.454.28-1.028.28-1.482 0l-4.209-2.59z"></path>
        <path d="M24 13.589v-.075c0-.781-.633-1.414-1.414-1.414h-7.072c-.781 0-1.414.633-1.414 1.414v.075l4.579 2.818c.228.14.514.14.742 0L24 13.589z"></path>
      </g>
    </g>
  </svg>
);

export default FolderMail;
