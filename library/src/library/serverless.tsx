import type { ComponentProps, FC } from "react";

const Serverless: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#F87171"
      d="M9.128 8.006l1.044-3.064H3.278v3.064h5.85zm12.15 0V4.942h-7.816l-.992 3.064h8.808zm-13.94 5.362l.919-3.064H3.278v3.064h4.06zm13.94 0v-3.064h-9.793l-.93 3.064h10.723zM5.432 19.113l.91-3.064H3.278v3.064h2.154zm15.846 0v-3.064H9.642L8.64 19.113h12.638z"
    ></path>
  </svg>
);

export default Serverless;
