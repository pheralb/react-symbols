import { ComponentProps, FC } from 'react';

const Capacitor: FC<ComponentProps<'svg'>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#60A5FA"
      d="M19.081 2.35l-4.795 4.795L9.62 2.482 7.05 5.05l4.664 4.665 2.57 2.57 4.705 4.705 2.57-2.57-4.705-4.705 4.795-4.797-2.568-2.568zM5.052 7.05l-2.57 2.57 4.665 4.664L2.35 19.08l2.57 2.57 4.796-4.796 4.704 4.705 2.57-2.57-7.274-7.274L5.052 7.05z"
    ></path>
  </svg>
);

export default Capacitor;
