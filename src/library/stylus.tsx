import React from 'react';
import { SvgInterface } from '../interfaces/svgInterface';

const Stylus: React.FC<SvgInterface> = (props: SvgInterface) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 24}
      height={props.height || 24}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#14B8A6"
        d="M14.603 18.172c1.616-1.933 1.806-3.93.555-7.637-.793-2.345-2.108-4.151-1.141-5.609 1.03-1.553 3.216-.047 1.394 2.028l.364.254c2.187.253 3.264-2.741 1.632-3.597-4.31-2.25-8.08 2.076-6.417 7.083.713 2.123 1.712 4.373.903 6.163-.697 1.537-2.044 2.44-2.947 2.472-1.885.095-.633-4.23 1.537-5.308.19-.095.46-.222.206-.539-2.677-.3-4.246.935-5.15 2.662-2.63 5.023 4.992 6.877 9.064 2.028z"
      ></path>
    </svg>
  );
};

export default Stylus;