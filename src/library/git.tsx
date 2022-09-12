import React, { ComponentProps } from 'react';

const Git: React.FC<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#F87171"
        d="M20.661 11.198l-7.86-7.859a1.159 1.159 0 00-1.639 0L9.53 4.972l2.07 2.07a1.376 1.376 0 011.744 1.755l1.995 1.995a1.377 1.377 0 011.425 2.278 1.38 1.38 0 01-2.251-1.5l-1.86-1.861-.001 4.897a1.38 1.38 0 11-1.134-.04V9.623a1.379 1.379 0 01-.749-1.809l-2.04-2.04-5.39 5.388a1.16 1.16 0 000 1.64l7.86 7.858a1.16 1.16 0 001.64 0l7.822-7.821a1.16 1.16 0 000-1.64"
      ></path>
    </svg>
  );
};

export default Git;
