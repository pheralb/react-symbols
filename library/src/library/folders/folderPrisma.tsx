import type { ComponentProps, FC } from "react";

const FolderPrisma: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#64748B"
      fillRule="evenodd"
      d="M5 4a3 3 0 00-3 3v10a3 3 0 003 3h8v-2H5a1 1 0 01-1-1V7a1 1 0 011-1h2.784a1 1 0 01.635.227l2.393 1.966a3 3 0 001.904.682H19a1 1 0 011 1V10h2v-.125a3 3 0 00-3-3h-6.284a1 1 0 01-.635-.227L9.688 4.682A3 3 0 007.784 4H5z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#14B8A6"
      fillRule="evenodd"
      d="M15.076 17.737a.489.489 0 01-.004-.517l3.67-5.987a.489.489 0 01.86.051l3.353 7.273a.489.489 0 01-.303.672l-5.216 1.565a.489.489 0 01-.553-.207l-1.807-2.85zm4.09-4.753a.183.183 0 01.347-.037l2.313 5.351c.043.1-.01.217-.116.248l-3.603 1.076a.183.183 0 01-.232-.212l1.29-6.426z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default FolderPrisma;
