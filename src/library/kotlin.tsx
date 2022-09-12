import React, { ComponentProps } from 'react';

const Kotlin: React.FC<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="#A855F7"
        strokeWidth="2"
        d="M18.922 20H4.336V4h14.586l-7.293 7.293-.707.707.707.707L18.922 20z"
      ></path>
    </svg>
  );
};

export default Kotlin;
