import React, { ComponentProps } from 'react';

const Lua: React.FC<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#2563EB"
        fillRule="evenodd"
        d="M10.85 5.3a7.854 7.854 0 017.851 7.85 7.854 7.854 0 01-7.85 7.851A7.854 7.854 0 013 13.151 7.854 7.854 0 0110.85 5.3zm3.254 2.299a2.3 2.3 0 010 4.597 2.3 2.3 0 010-4.598z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#2563EB"
        d="M21 5.298a2.3 2.3 0 00-4.598 0 2.3 2.3 0 004.598 0z"
      ></path>
    </svg>
  );
};

export default Lua;
