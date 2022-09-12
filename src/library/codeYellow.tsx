import React, { ComponentProps } from 'react';

const CodeYellow: React.FC<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="#F59E0B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6.778 8.519L3 12.297l3.778 3.779M17.222 8.519L21 12.297l-3.778 3.779M9.271 18.595L14.73 6"
      ></path>
    </svg>
  );
};

export default CodeYellow;
