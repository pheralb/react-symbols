import type { ComponentProps, FC } from "react";

const Markdoc: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#FBBF24"
      fillRule="evenodd"
      d="M7.326 4.696A1.826 1.826 0 0 0 5.5 6.522v10.956c0 1.009.818 1.826 1.826 1.826h10.348a1.826 1.826 0 0 0 1.826-1.826V6.522a1.826 1.826 0 0 0-1.826-1.826zm6.186 6.679-.697 3.44h-1.31l-.697-3.44c-.123-.56-.287-1.57-.369-2.185h-.095c.04.792.068 1.98.068 2.744v5.244H8.91V7.483h2.117l.915 4.383c.068.41.15.942.177 1.23h.082c.027-.288.11-.82.178-1.23l.914-4.383h2.117v9.695h-1.502v-5.244c0-.764.027-1.952.068-2.744h-.095a26 26 0 0 1-.37 2.185"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default Markdoc;
