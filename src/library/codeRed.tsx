import React from 'react';
import { SvgInterface } from '../interfaces/svgInterface';

const CodeRed: React.FC<SvgInterface> = (props: SvgInterface) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 24}
      height={props.height || 24}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#F87171"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6.778 8.519L3 12.297l3.778 3.779M17.222 8.519L21 12.297l-3.778 3.779M9.271 18.595L14.73 6"
      ></path>
    </svg>
  );
};

export default CodeRed;
