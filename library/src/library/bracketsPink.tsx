import type { ComponentProps, FC } from "react";

const BracketsPink: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      fill="#F472B6"
      d="M4.778 6.667A2.667 2.667 0 0 1 7.444 4a.889.889 0 0 1 0 1.778.889.889 0 0 0-.888.889v3.5c0 .701-.273 1.35-.73 1.833.457.483.73 1.132.73 1.832v3.501c0 .491.398.89.888.89a.889.889 0 0 1 0 1.777 2.667 2.667 0 0 1-2.666-2.667v-3.5a.889.889 0 0 0-.674-.863l-.43-.108a.889.889 0 0 1 0-1.724l.43-.108a.889.889 0 0 0 .674-.862V6.667Zm14.222 0A2.667 2.667 0 0 0 16.333 4a.889.889 0 0 0 0 1.778c.491 0 .89.398.89.889v3.5c0 .701.272 1.35.729 1.833a2.664 2.664 0 0 0-.73 1.832v3.501a.889.889 0 0 1-.889.89.889.889 0 0 0 0 1.777A2.667 2.667 0 0 0 19 17.333v-3.5c0-.408.278-.764.673-.863l.431-.108a.889.889 0 0 0 0-1.724l-.43-.108a.889.889 0 0 1-.674-.862V6.667Z"
    />
  </svg>
);

export default BracketsPink;
