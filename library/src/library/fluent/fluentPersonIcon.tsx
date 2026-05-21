import type { ComponentProps, FC } from "react";
const FluentPersonIcon: FC<ComponentProps<"svg">> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M12.603 9.6a1.8 1.8 0 0 1 1.8 1.8v.46c0 .715-.257 1.407-.721 1.95C12.426 15.277 10.516 16 8 16s-4.426-.724-5.678-2.192a3 3 0 0 1-.719-1.947v-.463a1.8 1.8 0 0 1 1.799-1.8h9.201zm0 1.2H3.402a.6.6 0 0 0-.599.6v.46c0 .43.152.844.431 1.17C4.237 14.204 5.81 14.8 8 14.8s3.765-.597 4.77-1.771a1.8 1.8 0 0 0 .432-1.17v-.46a.6.6 0 0 0-.599-.6zM8 .004a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 1.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6" />
  </svg>
);
export default FluentPersonIcon;
