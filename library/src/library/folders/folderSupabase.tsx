import type { ComponentProps, FC } from "react";

const FolderSupabase: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="url(#paint0_linear_24689_562)"
      d="M19.262 20.07c-.236.275-.716.125-.721-.227l-.083-5.144h3.734c.677 0 1.054.724.633 1.213l-3.563 4.157z"
    ></path>
    <path
      fill="url(#paint1_linear_24689_562)"
      d="M19.262 20.07c-.236.275-.716.125-.721-.227l-.083-5.144h3.734c.677 0 1.054.724.633 1.213l-3.563 4.157z"
    ></path>
    <path
      fill="#3ECF8E"
      d="M17.743 11.794c.237-.275.715-.125.72.227l.037 5.143h-3.688c-.677 0-1.054-.724-.633-1.213l3.564-4.157z"
    ></path>
    <path
      fill="#64748B"
      fillRule="evenodd"
      d="M5 4a3 3 0 00-3 3v10a3 3 0 003 3h8v-2H5a1 1 0 01-1-1V7a1 1 0 011-1h2.784a1 1 0 01.635.227l2.393 1.966a3 3 0 001.904.682H19a1 1 0 011 1V10h2v-.125a3 3 0 00-3-3h-6.284a1 1 0 01-.635-.227L9.688 4.682A3 3 0 007.784 4H5z"
      clipRule="evenodd"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_24689_562"
        x1="18.458"
        x2="21.697"
        y1="15.84"
        y2="17.306"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#249361"></stop>
        <stop offset="1" stopColor="#3ECF8E"></stop>
      </linearGradient>
      <linearGradient
        id="paint1_linear_24689_562"
        x1="16.986"
        x2="18.326"
        y1="13.974"
        y2="16.698"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopOpacity="0.2"></stop>
        <stop offset="1" stopOpacity="0"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default FolderSupabase;
