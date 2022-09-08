import React from 'react';
import { SvgInterface } from '../interfaces/svgInterface';

const Pulumi: React.FC<SvgInterface> = (props: SvgInterface) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 24}
      height={props.height || 24}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#F87171"
        fillRule="evenodd"
        d="M6.073 12.597c.704-.407.705-1.723.003-2.94C5.373 8.44 4.233 7.784 3.529 8.19c-.704.406-.705 1.722-.003 2.94.703 1.216 1.843 1.873 2.547 1.467zm.004 2.605c.703 1.217.702 2.533-.002 2.94-.704.406-1.845-.25-2.547-1.468-.703-1.217-.702-2.533.002-2.94.704-.405 1.845.251 2.547 1.468zm4.798 2.774c.703 1.217.701 2.533-.003 2.94-.704.406-1.844-.251-2.547-1.468-.702-1.217-.7-2.533.003-2.94.704-.406 1.844.251 2.547 1.468zm-.002-5.545c.703 1.217.702 2.533-.002 2.94-.704.406-1.845-.251-2.547-1.468-.703-1.217-.702-2.533.002-2.94.705-.406 1.845.251 2.547 1.468z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#A855F7"
        fillRule="evenodd"
        d="M20.471 11.132c.703-1.217.701-2.533-.003-2.94-.704-.406-1.844.251-2.546 1.468-.703 1.217-.702 2.533.002 2.94.704.406 1.845-.25 2.547-1.468zm0 2.605c.704.406.705 1.722.003 2.939-.703 1.217-1.843 1.874-2.547 1.467-.704-.406-.705-1.722-.003-2.94.703-1.216 1.843-1.873 2.547-1.466zm-4.796 2.769c.703.406.705 1.722.002 2.94-.702 1.216-1.843 1.873-2.547 1.466-.704-.406-.705-1.722-.002-2.939.702-1.217 1.842-1.874 2.546-1.467zm-.003-5.544c.704.407.705 1.723.002 2.94-.702 1.216-1.842 1.873-2.546 1.467-.704-.407-.706-1.723-.003-2.94.703-1.216 1.843-1.873 2.547-1.467z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#F59E0B"
        fillRule="evenodd"
        d="M14.542 3.472c0 .813-1.14 1.472-2.544 1.472-1.405 0-2.545-.66-2.545-1.472 0-.813 1.14-1.472 2.545-1.472s2.544.659 2.544 1.472zM9.745 6.238c0 .813-1.139 1.472-2.544 1.472s-2.544-.659-2.544-1.472S5.796 4.766 7.2 4.766s2.544.66 2.544 1.472zm7.056 1.472c1.405 0 2.544-.659 2.544-1.472s-1.14-1.472-2.544-1.472c-1.405 0-2.545.66-2.545 1.472 0 .813 1.14 1.472 2.545 1.472zm-2.259 1.3c0 .814-1.14 1.473-2.544 1.473-1.405 0-2.545-.66-2.545-1.472 0-.813 1.14-1.472 2.545-1.472s2.544.659 2.544 1.472z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default Pulumi;
