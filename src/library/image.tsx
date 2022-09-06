import React from 'react';
import { SvgInterface } from '../interfaces/svgInterface';

const Image: React.FC<SvgInterface> = (props: SvgInterface) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 24}
      height={props.height || 24}
      fill="none"
      viewBox="0 0 24 24"
    >
      <rect
        width="16"
        height="16"
        x="4"
        y="4"
        stroke="#C084FC"
        strokeLinejoin="round"
        strokeWidth="2"
        rx="3"
      ></rect>
      <circle cx="15" cy="9" r="2" fill="#C084FC"></circle>
      <path
        stroke="#C084FC"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 19l5.586-5.586a2 2 0 012.828 0L19 19"
      ></path>
    </svg>
  );
};

export default Image;
