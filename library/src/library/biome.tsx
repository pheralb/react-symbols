import type { ComponentProps, FC } from "react";

const Biome: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ isolation: "isolate" }}
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#60A5FA"
      d="M24 5.76l-8.91 15.431a20.11 20.11 0 0110.544-.365l3.011.711-2.833 12.012-3.016-.71c-3.706-.875-7.267 1.072-8.772 4.178l-2.787-1.349c2.127-4.393 7.14-7.053 12.272-5.842l1.412-5.987A17.016 17.016 0 004 40.4h40L24 5.76z"
    ></path>
  </svg>
);

export default Biome;
