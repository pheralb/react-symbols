import type { ComponentProps, FC } from "react"

const Laravel: FC<ComponentProps<"svg">> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            fill="#EF4444"
            stroke="#EF4444"
            strokeWidth="0.48"
            d="M21.134 6.84c0-.008-.009-.017-.009-.026-.009-.017-.009-.035-.017-.044-.01-.009-.018-.018-.018-.026-.01-.01-.018-.027-.027-.036l-.026-.026A.123.123 0 0021 6.655l-3.547-2.044a.288.288 0 00-.292 0l-3.547 2.044a.123.123 0 01-.036.027l-.027.026c-.008.009-.017.027-.026.035-.009.01-.018.018-.018.027-.009.018-.017.027-.017.044 0 .01-.01.018-.01.027-.008.026-.008.053-.008.08v3.874l-2.955 1.699v-7.59c0-.027 0-.054-.009-.08 0-.01-.008-.018-.008-.027-.01-.018-.01-.035-.018-.044-.009-.009-.018-.018-.018-.027-.009-.008-.018-.026-.026-.035l-.027-.026a.12.12 0 00-.035-.027L6.82 2.612a.288.288 0 00-.292 0L2.981 4.656a.122.122 0 01-.036.026l-.026.027c-.009.009-.018.026-.027.035-.009.009-.017.018-.017.027-.01.017-.018.026-.018.044 0 .009-.009.018-.009.026-.009.027-.009.053-.009.08v12.137c0 .106.053.204.15.257l7.087 4.078c.018.009.035.018.044.018.009 0 .018.008.027.008a.244.244 0 00.08.01c.026 0 .052 0 .079-.01.009 0 .009-.008.018-.008.017-.01.035-.01.053-.018l7.086-4.078a.305.305 0 00.15-.257v-3.875l3.397-1.955a.305.305 0 00.15-.256V6.91a.142.142 0 01-.026-.07h0zm-10.925 9.865l-2.946-1.672 3.096-1.787 3.398-1.955 2.954 1.698-2.167 1.239-4.335 2.477zm6.794-7.582v3.362l-1.238-.716-1.716-.991V7.416l1.238.717 1.716.99zm.301-3.91l2.955 1.699-2.955 1.698-2.955-1.698 2.955-1.699zm-9.103 8.608l-1.239.717V7.115l1.716-.99 1.239-.717v7.413l-1.716 1zM6.67 3.205l2.954 1.699L6.67 6.61 3.716 4.912 6.67 3.205zM3.414 5.417l1.238.716 1.716.991v7.927c0 .009 0 .026.01.035 0 .018 0 .027.008.044 0 .01.009.027.018.036.009.009.009.026.018.035l.026.027c.009.008.018.017.027.035.008.009.017.018.026.018a.122.122 0 00.036.026l3.379 1.911v3.397l-6.502-3.742V5.417zm13.589 11.457L10.5 20.616v-3.397l4.813-2.752 1.69-.964v3.37zm3.547-6.087l-2.954 1.699V9.124l1.716-.99 1.238-.717v3.37z"
        ></path>
    </svg>
)

export default Laravel