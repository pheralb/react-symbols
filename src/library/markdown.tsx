import React from 'react';
import { SvgInterface } from '../interfaces/svgInterface';

const Markdown: React.FC<SvgInterface> = (props: SvgInterface) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 24}
      height={props.height || 24}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#60A5FA"
        d="M3 15.714V8h2.323l2.322 2.836L9.968 8h2.322v7.714H9.968V11.29l-2.323 2.836-2.322-2.836v4.424H3zm14.516 0l-3.484-3.743h2.323V8h2.322v3.97H21l-3.484 3.744z"
      ></path>
    </svg>
  );
};

export default Markdown;
