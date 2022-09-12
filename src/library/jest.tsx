import React, { ComponentProps } from 'react';

const Jest: React.FC<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#F472B6"
        d="M15.047 7.453l-1.219 2.462c.4.371.683.86.795 1.414h.919a2.64 2.64 0 01.736-1.361l-1.23-2.515z"
      ></path>
      <path
        fill="#F472B6"
        d="M12.803 9.32l2.244-4.535 2.238 4.564c.089-.029.177-.053.265-.076L19.677 3h-9.265l2.12 6.255c.088.018.183.041.271.065zm-.772 4.011a1.486 1.486 0 001.078-2.509l-.005-.006a1.097 1.097 0 00-.2-.17l-.007-.007c-.017-.011-.04-.03-.064-.04-.006 0-.006-.007-.012-.007-.024-.011-.047-.03-.07-.041h-.007c-.023-.012-.053-.03-.076-.041h-.006a.362.362 0 00-.07-.03c-.007 0-.013-.005-.019-.005-.017-.006-.04-.018-.059-.024-.005 0-.011-.006-.023-.006-.024-.006-.047-.018-.07-.024h-.007c-.03-.005-.053-.011-.082-.017-.006 0-.012 0-.024-.006-.023-.006-.04-.006-.064-.012-.012 0-.018 0-.03-.006-.018 0-.041-.006-.059-.006h-.23c-.023 0-.04.006-.064.006h-.024c-.023.006-.047.006-.07.012h-.018l-.083.018a1.49 1.49 0 00-1.13 1.443 1.506 1.506 0 001.495 1.478zm6.244-2.968h-.012c-.023 0-.041-.006-.065-.006h-.076c-.03 0-.06 0-.094.006h-.03c-.023 0-.047.005-.07.005-.006 0-.018 0-.024.006l-.088.018h-.006l-.083.018c-.006 0-.018.006-.023.006-.024.005-.047.011-.071.023-.006 0-.012.006-.018.006-.03.012-.059.024-.082.035l-.083.036c-.005 0-.011.006-.017.006a.446.446 0 00-.071.04s-.006 0-.006.007a.893.893 0 00-.153.106l-.006.006a1.608 1.608 0 00-.206.194 1.493 1.493 0 00-.36.972 1.486 1.486 0 101.773-1.46c-.035-.013-.082-.019-.129-.024zM5.876 13.33c.82 0 1.485-.665 1.485-1.484s-.666-1.484-1.485-1.484c-.818 0-1.484.665-1.484 1.484s.666 1.484 1.484 1.484z"
      ></path>
      <path
        fill="#F472B6"
        d="M18.128 14.48a2.642 2.642 0 01-2.55-1.973h-.99a2.642 2.642 0 01-2.957 1.943 7.91 7.91 0 01-1.225 1.455 8.114 8.114 0 01-2.827 1.755l-.242.089-.224-.118c-1.237-.636-1.873-1.926-1.649-3.175a2.283 2.283 0 01-.406-.106c-.024.041-.042.088-.065.136-.377.777-.772 1.578-.913 2.438-.153.919-.218 2.598 1.078 3.493.565.389 1.16.583 1.826.583 1.278 0 2.656-.683 4.117-1.408 1.143-.565 2.32-1.154 3.546-1.455a15 15 0 011.39-.247c.83-.118 1.62-.236 2.262-.607a2.602 2.602 0 001.16-3.163c-.389.224-.842.36-1.331.36z"
      ></path>
    </svg>
  );
};

export default Jest;
