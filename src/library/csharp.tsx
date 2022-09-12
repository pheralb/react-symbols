import React, { ComponentProps } from 'react';

const CSharp: React.FC<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#14B8A6"
        d="M15.263 9.938h-2.489a2.432 2.432 0 00-.278-.858c-.14-.254-.32-.47-.54-.648a2.375 2.375 0 00-.761-.41 2.912 2.912 0 00-.927-.141c-.602 0-1.126.15-1.573.449-.447.295-.794.727-1.04 1.295-.246.564-.37 1.25-.37 2.057 0 .83.124 1.526.37 2.09.25.565.598.991 1.045 1.28.447.287.964.431 1.551.431.33 0 .635-.044.915-.13.284-.088.536-.215.756-.381.22-.17.401-.377.545-.62.148-.242.25-.519.307-.83l2.489.012a4.643 4.643 0 01-1.511 2.87 4.84 4.84 0 01-1.535.92c-.59.223-1.26.335-2.005.335-1.038 0-1.966-.235-2.784-.704-.815-.47-1.459-1.15-1.932-2.04-.47-.89-.705-1.968-.705-3.233 0-1.27.239-2.349.716-3.239.477-.89 1.125-1.568 1.943-2.034.818-.47 1.739-.704 2.762-.704.674 0 1.299.094 1.875.284.58.189 1.093.466 1.54.83.446.359.81.8 1.09 1.323.284.523.466 1.121.546 1.796zM20.273 16.47l1.466-8.94h1.397l-1.467 8.94h-1.396zm-4.003-2.218l.232-1.397h6.983l-.231 1.397H16.27zm.86 2.217l1.467-8.938h1.396l-1.466 8.938H17.13zm-.349-5.325l.236-1.396H24l-.236 1.397h-6.983z"
      ></path>
    </svg>
  );
};

export default CSharp;
