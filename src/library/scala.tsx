import React, { ComponentProps } from 'react';

const Scala: React.FC<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#7F1D1D"
        fillRule="evenodd"
        d="M6.017 9.698c.157.216 1.48.625 3.456 1.05 1.974.378 4.028 1.873 5.626 1.412 1.08-.312 2.252-3.095 2.252-3.509V8.61c0-.289-.216-.52-.584-.713-1.506-.77-1.791-1.053-2.35-.9-2.899.8-8.018.392-8.4 2.702zM6.017 15.348c.157.22 1.48.625 3.456 1.051 2.206.402 4.125 1.714 5.723 1.252 1.08-.312 2.155-2.935 2.155-3.349v-.04c0-.288-.216-.52-.584-.713-1.149-.61-2.667-1.284-3.225-1.13-2.904.798-6.786.974-7.525 2.93z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#F87171"
        fillRule="evenodd"
        d="M15.192 4.092C12.522 4.864 8.286 5.3 6.004 5.3v4.358c0 .015.006.03.016.04 1.558 0 6.365-.508 9.266-1.306a10.95 10.95 0 001.485-.493c.354-.16.584-.328.584-.503V3c-.004.414-1.083.78-2.163 1.092zM15.192 9.744c-1.598.46-3.755.803-5.72 1.004-1.318.135-2.55.205-3.468.205v4.355c0 .015.006.03.016.04 1.558 0 6.365-.509 9.266-1.306.506-.129 1.002-.293 1.485-.493.354-.16.584-.327.584-.502V8.65c-.004.414-1.083.78-2.163 1.093zM15.192 15.399c-1.598.46-3.755.803-5.72 1.004-1.32.135-2.554.205-3.471.205V21c1.54 0 6.373-.505 9.282-1.306 1.072-.296 2.068-.632 2.068-.996v-4.396c0 .418-1.079.78-2.159 1.097z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default Scala;
