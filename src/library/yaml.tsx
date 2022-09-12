import React, { ComponentProps } from 'react';

const Yaml: React.FC<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#A78BFA"
        d="M6.533 5.864h2.755l2.654 5.011h.113l2.654-5.011h2.756l-4.245 7.522V17.5h-2.443v-4.114L6.533 5.864z"
      ></path>
    </svg>
  );
};

export default Yaml;
