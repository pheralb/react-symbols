import type { ComponentProps, FC } from "react";

const Unocss: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#clip0_24689_502)">
      <path
        fill="#71717A"
        d="M12.609 16.736a4.09 4.09 0 118.182 0 4.09 4.09 0 01-8.182 0z"
      ></path>
      <path
        fill="#D4D4D8"
        d="M12.609 7.336a4.09 4.09 0 018.182 0v3.682a.41.41 0 01-.41.41h-7.363a.41.41 0 01-.409-.41V7.336z"
      ></path>
      <path
        fill="#3F3F46"
        d="M11.345 16.736a4.09 4.09 0 01-8.181 0v-3.681a.41.41 0 01.409-.41h7.363c.226 0 .41.184.41.41v3.681z"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_24689_502">
        <path fill="#fff" d="M0 0H18V18H0z" transform="translate(3 3)"></path>
      </clipPath>
    </defs>
  </svg>
);

export default Unocss;
