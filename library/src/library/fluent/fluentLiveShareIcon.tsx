import type { ComponentProps, FC } from "react";
const FluentLiveShareIcon: FC<ComponentProps<"svg">> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M8.315 3.201V1.47c0-.39.442-.6.742-.382l.051.043 3.748 3.595a.47.47 0 0 1 .047.624l-.047.053-3.748 3.596a.47.47 0 0 1-.789-.272l-.004-.067V6.957l-.215.018c-1.5.157-2.938.833-4.323 2.039a.469.469 0 0 1-.773-.412c.416-3.325 2.155-5.158 5.123-5.388zm.937-.632v1.089c0 .259-.21.469-.468.469-2.422 0-3.923 1.048-4.571 3.224l-.05.174.22-.148c1.399-.914 2.867-1.375 4.4-1.375a.47.47 0 0 1 .465.406l.004.063v1.09l2.602-2.496z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 12.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M8 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
    />
  </svg>
);
export default FluentLiveShareIcon;
