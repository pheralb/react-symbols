import { ComponentProps, FC } from "react"

const Tex: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#2563EB"
      fillRule="evenodd"
      d="M3.764 3h12.472l.02 4.178h-.596c-.196-1.49-.756-2.499-1.68-3.025-.519-.29-1.294-.448-2.326-.475v10.904c0 .762.133 1.268.4 1.518.266.25.82.374 1.663.374V17H6.333v-.526c.81 0 1.347-.127 1.614-.38.266-.252.4-.756.4-1.512V3.678c-1.012.027-1.788.185-2.328.475-.99.54-1.55 1.548-1.679 3.025h-.597L3.763 3z"
      clipRule="evenodd"
    ></path>
  </svg>
)

export default Tex
