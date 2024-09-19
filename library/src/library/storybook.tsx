import type { ComponentProps, FC } from "react"

const Storybook: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <mask
      id="mask0_20590_698"
      style={{ maskType: "alpha" }}
      width="16"
      height="18"
      x="4"
      y="3"
      maskUnits="userSpaceOnUse"
    >
      <path
        fill="#F472B6"
        d="M5.335 19.586L4.777 4.73a.905.905 0 01.848-.937l12.637-.79a.905.905 0 01.962.903v16.19a.905.905 0 01-.946.904l-12.08-.543a.905.905 0 01-.864-.87z"
      ></path>
    </mask>
    <g mask="url(#mask0_20590_698)">
      <path
        fill="#F472B6"
        fillRule="evenodd"
        d="M4.777 4.729l.558 14.857c.017.471.393.85.863.87l12.08.543.04.001c.5 0 .906-.405.906-.905V3.905c0-.019 0-.038-.002-.056a.905.905 0 00-.96-.847l-.993.062.072 2.077a.135.135 0 01-.218.11l-.67-.526-.792.6a.135.135 0 01-.216-.113l.084-2.04-9.904.62a.905.905 0 00-.848.937zm8.448 5.055c0 .352 2.372.184 2.69-.064 0-2.397-1.286-3.657-3.642-3.657s-3.676 1.28-3.676 3.199c0 1.922 1.492 2.76 2.76 3.472.937.526 1.751.983 1.751 1.758 0 .512-.25.816-.802.816-.718 0-1.002-.367-.969-1.615 0-.27-2.74-.355-2.824 0-.212 3.023 1.671 3.895 3.826 3.895 2.09 0 3.726-1.113 3.726-3.128 0-2.103-1.576-2.938-2.88-3.629-.916-.486-1.698-.9-1.698-1.633 0-.72.535-.816.852-.816.335 0 .936.059.886 1.402z"
        clipRule="evenodd"
      ></path>
    </g>
  </svg>
)

export default Storybook
