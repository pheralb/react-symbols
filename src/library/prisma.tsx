import React from 'react';
import { SvgInterface } from '../interfaces/svgInterface';

const Prisma: React.FC<SvgInterface> = (props: SvgInterface) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 23}
      height={props.height || 24}
      fill="none"
      viewBox="0 0 23 24"
    >
      <path
        fill="#14B8A6"
        fillRule="evenodd"
        d="M4.14 15.355a.896.896 0 01-.008-.948l6.73-10.98a.896.896 0 011.579.094L18.59 16.86a.896.896 0 01-.557 1.234l-9.565 2.87a.896.896 0 01-1.014-.38l-3.315-5.228zm7.5-8.717a.336.336 0 01.637-.067l4.242 9.814a.336.336 0 01-.213.455l-6.608 1.973a.336.336 0 01-.426-.388l2.367-11.787z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default Prisma;
