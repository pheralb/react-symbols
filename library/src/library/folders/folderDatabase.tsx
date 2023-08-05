import type { ComponentProps, FC } from "react"

const FolderDatabase: FC<ComponentProps<"svg">> = (props) => (
 <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  {...props}
 >
  <path
   fill="#64748B"
   fillRule="evenodd"
   d="M5 4a3 3 0 00-3 3v10a3 3 0 003 3h8v-2H5a1 1 0 01-1-1V7a1 1 0 011-1h2.784a1 1 0 01.635.227l2.393 1.966a3 3 0 001.904.682H19a1 1 0 011 1V10h2v-.125a3 3 0 00-3-3h-6.284a1 1 0 01-.635-.227L9.688 4.682A3 3 0 007.784 4H5z"
   clipRule="evenodd"
  ></path>
  <path
   stroke="#F472B6"
   strokeWidth="1.122"
   d="M19 15.374c.708 0 1.374-.112 1.884-.313.253-.099.497-.231.686-.407.19-.176.366-.438.366-.774 0-.337-.176-.598-.366-.774a2.178 2.178 0 00-.686-.408c-.51-.2-1.176-.312-1.884-.312-.707 0-1.374.112-1.884.312-.253.1-.496.232-.685.408-.19.176-.366.437-.366.774 0 .336.176.598.366.774.19.176.432.308.685.408.51.2 1.177.312 1.884.312z"
  ></path>
  <path
   fill="#F472B6"
   stroke="#F472B6"
   strokeLinejoin="round"
   strokeWidth="1.122"
   d="M16.069 19.239v-5.176l.488 1.071.26.752 2.055.095 2.857-1.137.202-.78v5.175c0 .664-.538 1.202-1.202 1.202h-3.458a1.202 1.202 0 01-1.202-1.202z"
  ></path>
 </svg>
)

export default FolderDatabase
