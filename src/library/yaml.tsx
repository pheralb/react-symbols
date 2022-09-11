import React from 'react';
import { SvgInterface } from '../interfaces/svgInterface';

const Yaml: React.FC<SvgInterface> = (props: SvgInterface) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 24}
      height={props.height || 24}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#A78BFA"
        d="M6.533 5.864h2.755l2.654 5.011h.113l2.654-5.011h2.756l-4.245 7.522V17.5h-2.443v-4.114L6.533 5.864z"
      ></path>
    </svg>
  );
};

export default Yaml;
