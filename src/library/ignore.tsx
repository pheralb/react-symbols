import React, { ComponentProps } from 'react';

const Ignore: React.FC<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#64748B"
        fillRule="evenodd"
        d="M7.682 16.657c1.224.453 2.64.739 4.253.739 5.236 0 8.487-3.016 9.753-4.933a.852.852 0 00-.066-1.023 13.861 13.861 0 00-1.582-1.58l-4.221 2.322a3.741 3.741 0 01-5.65 3.107l-2.487 1.368zm1.774-7.252L2.754 13.09a8.303 8.303 0 01-.453-.645.849.849 0 01.066-.992c1.513-1.864 5.028-4.85 9.568-4.85.76 0 1.492.084 2.192.231l-2.893 1.592a3.735 3.735 0 00-1.778.978zm2.05 5.15a2.5 2.5 0 002.838-1.561l-2.838 1.56z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="#64748B"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M2.296 16.481L20.981 6.204"
      ></path>
    </svg>
  );
};

export default Ignore;
