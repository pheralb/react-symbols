import React from 'react';
import { SvgInterface } from '../interfaces/svgInterface';

const Text: React.FC<SvgInterface> = (props: SvgInterface) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 24}
      height={props.height || 24}
      fill="none"
      viewBox="0 0 24 24"
    >
      <rect width="16" height="2" x="4" y="6" fill="#64748B" rx="1"></rect>
      <rect width="12" height="2" x="4" y="11" fill="#64748B" rx="1"></rect>
      <rect width="16" height="2" x="4" y="16" fill="#64748B" rx="1"></rect>
    </svg>
  );
};

export default Text;
