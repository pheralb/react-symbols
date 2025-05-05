import type { ComponentProps, FC } from "react";

const FolderReact: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#64748B"
      fillRule="evenodd"
      d="M5 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h8v-2H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2.784a1 1 0 0 1 .635.227l2.393 1.966a3 3 0 0 0 1.904.682H19a1 1 0 0 1 1 1V10h2v-.125a3 3 0 0 0-3-3h-6.284a1 1 0 0 1-.635-.227L9.688 4.682A3 3 0 0 0 7.784 4z"
      clipRule="evenodd"
    ></path>
    <g clipPath="url(#clip0_4_143)">
      <path
        fill="#2563EB"
        d="M18 16.423c.56 0 1.015-.413 1.015-.923s-.454-.922-1.015-.922-1.015.413-1.015.922.454.922 1.015.922"
      ></path>
      <path
        stroke="#2563EB"
        d="M18 17.39c3.009 0 5.447-.846 5.447-1.89S21.01 13.61 18 13.61s-5.447.846-5.447 1.89S14.99 17.39 18 17.39Z"
      ></path>
      <path
        stroke="#2563EB"
        d="M16.199 16.445c1.504 2.367 3.53 3.864 4.525 3.342.994-.522.581-2.864-.923-5.232s-3.53-3.864-4.525-3.342-.582 2.864.923 5.232Z"
      ></path>
      <path
        stroke="#2563EB"
        d="M16.199 14.555c-1.505 2.368-1.918 4.71-.923 5.232s3.021-.974 4.525-3.342c1.505-2.367 1.918-4.71.923-5.232s-3.021.975-4.525 3.342Z"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_4_143">
        <path fill="#fff" d="M12 10h12v11H12z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default FolderReact;
