import type { ComponentProps, FC } from "react"

const Gif: FC<ComponentProps<"svg">> = (props) => (
 <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  {...props}
 >
  <rect
   width="16"
   height="16"
   x="4"
   y="4"
   stroke="#C084FC"
   strokeLinejoin="round"
   strokeWidth="2"
   rx="3"
  ></rect>
  <path
   fill="#C084FC"
   stroke="#C084FC"
   strokeWidth="0.5"
   d="M12.115 9.528c.338 0 .618.28.618.618v3.708c0 .338-.28.618-.618.618a.622.622 0 01-.618-.618v-3.708c0-.338.28-.618.618-.618zm-1.854.618a.623.623 0 00-.618-.618H6.965a.826.826 0 00-.824.824v3.296c0 .412.33.824.824.824h2.472a.826.826 0 00.824-.824v-1.03A.623.623 0 009.643 12a.623.623 0 00-.618.618v.618H7.377v-2.472h2.266c.338 0 .618-.28.618-.618zm7.416 0a.622.622 0 00-.618-.618h-2.266a.826.826 0 00-.824.824v3.502c0 .338.28.618.618.618.338 0 .618-.28.618-.618v-1.03h1.03c.338 0 .618-.28.618-.618a.623.623 0 00-.618-.618h-1.03v-.824h1.854c.337 0 .618-.28.618-.618z"
  ></path>
 </svg>
)

export default Gif
