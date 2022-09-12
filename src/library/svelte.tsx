import React, { ComponentProps } from 'react';

const Svelte: React.FC<ComponentProps<'svg'>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 25 24"
      {...props}
    >
      <mask
        id="path-1-outside-1_20571_794"
        width="17"
        height="20"
        x="4.141"
        y="2"
        fill="#000"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#fff" d="M4.141 2H21.141V22H4.141z"></path>
        <path d="M10.915 19.877A3.832 3.832 0 016.8 18.352a3.547 3.547 0 01-.606-2.682c.028-.153.067-.303.116-.45l.09-.278.248.181c.57.42 1.208.739 1.887.944l.179.054-.017.18c-.021.254.048.508.195.716a1.154 1.154 0 001.24.46c.104-.028.204-.072.295-.13l4.825-3.075a1.004 1.004 0 00.453-.672 1.072 1.072 0 00-.182-.809 1.154 1.154 0 00-1.24-.46 1.063 1.063 0 00-.296.13l-1.84 1.174a3.526 3.526 0 01-.981.43 3.833 3.833 0 01-4.114-1.525 3.546 3.546 0 01-.606-2.682 3.328 3.328 0 011.505-2.229l4.826-3.075a3.52 3.52 0 01.98-.43 3.833 3.833 0 014.113 1.524 3.547 3.547 0 01.607 2.682 3.41 3.41 0 01-.116.45l-.09.278-.248-.181a6.218 6.218 0 00-1.887-.943l-.18-.055.018-.179a1.084 1.084 0 00-.195-.717 1.155 1.155 0 00-1.24-.46 1.063 1.063 0 00-.295.13L9.419 9.728a1.003 1.003 0 00-.453.672 1.071 1.071 0 00.182.809 1.155 1.155 0 001.24.46c.104-.028.204-.072.296-.13l1.84-1.173a3.51 3.51 0 01.98-.43 3.832 3.832 0 014.114 1.524 3.547 3.547 0 01.606 2.682 3.33 3.33 0 01-1.504 2.23l-4.825 3.074a3.516 3.516 0 01-.98.43"></path>
      </mask>
      <path
        fill="#EA580C"
        d="M8.618 19.761l.695-1.875-.695 1.875zm-1.817-1.409l1.644-1.14a1.697 1.697 0 00-.016-.023L6.8 18.352zm-.606-2.682l-1.967-.36-.002.01 1.97.35zm.116-.45l1.898.628.002-.007-1.9-.622zm.09-.278l1.184-1.613a2 2 0 00-3.084.99l1.9.623zm.248.181l1.184-1.611-.001-.001-1.183 1.612zm1.887.944l.58-1.914h-.002l-.579 1.914zm.179.054l1.991.183a2 2 0 00-1.41-2.097l-.581 1.914zm-.017.18l-1.991-.184-.001.013 1.992.17zm.195.716l1.644-1.14-.012-.016-1.632 1.156zm1.24.46l.503 1.935.01-.002-.514-1.933zm.295-.13l1.071 1.69.004-.003-1.075-1.687zm4.825-3.075l-1.066-1.693-.01.006 1.076 1.687zm.453-.672l1.969.355v-.007l-1.969-.348zm-.182-.809l-1.644 1.14.015.022 1.629-1.162zm-1.24-.46l-.502-1.935-.012.003.514 1.933zm-.296.13l-1.07-1.69-.005.003 1.075 1.687zm-1.84 1.174l1.072 1.688.002-.002-1.075-1.686zm-.981.43L11.67 16l.013-.004-.516-1.932zM7.053 12.54l1.644-1.14a1.316 1.316 0 00-.016-.023L7.053 12.54zm-.606-2.682L4.48 9.504v.004l1.968.35zm1.505-2.229l1.064 1.694.011-.007-1.075-1.687zm4.826-3.075l-1.074-1.687h-.001l1.075 1.687zm.98-.43l-.503-1.936-.014.003.517 1.932zm4.113 1.524l-1.643 1.14.016.023 1.627-1.163zm.607 2.682l1.966.364.003-.014-1.97-.35zm-.116.45l-1.899-.627-.002.005 1.901.623zm-.09.278l-1.183 1.613a2 2 0 003.083-.99l-1.9-.623zm-.248-.181l-1.185 1.611.003.002 1.182-1.613zm-1.887-.943l-.58 1.914h.002l.578-1.914zm-.18-.055l-1.99-.185a2 2 0 001.41 2.1l.58-1.915zm.018-.179l1.991.185.001-.015-1.992-.17zm-.195-.717l-1.644 1.14.01.014 1.634-1.154zm-1.24-.46l-.503-1.935-.01.002.514 1.933zm-.295.13l-1.071-1.69-.004.003 1.075 1.687zM9.419 9.728l1.065 1.693.01-.006-1.075-1.687zm-.453.672l-1.969-.354v.004l1.969.35zm.182.809l1.644-1.14-.015-.021-1.629 1.16zm1.24.46l.502 1.935.013-.003-.516-1.933zm.296-.13l1.069 1.69.005-.003-1.074-1.687zm1.84-1.173L11.45 8.679l1.074 1.687zm.98-.43L13.003 8l-.013.003.516 1.932zm4.114 1.524l-1.643 1.14.016.023 1.627-1.163zm.606 2.682l1.969.354v-.004l-1.969-.35zm-1.504 2.23l-1.065-1.693-.01.006 1.075 1.687zm-4.825 3.074l1.074 1.687-1.074-1.687zm-1.483-1.505a1.833 1.833 0 01-1.099-.055l-1.39 3.75c1.12.415 2.34.477 3.495.176l-1.006-3.87zm-1.099-.055a1.832 1.832 0 01-.868-.674l-3.287 2.28c.68.98 1.646 1.73 2.765 2.144l1.39-3.75zm-.884-.697a1.547 1.547 0 01-.25-.558l-3.902.882c.163.72.468 1.4.897 2.001l3.255-2.325zm-.25-.558c-.046-.2-.05-.409-.014-.611l-3.939-.7a5.547 5.547 0 00.051 2.193l3.902-.882zm-.016-.6c.01-.063.026-.123.046-.183l-3.797-1.257c-.078.235-.14.475-.184.718l3.935.721zm.048-.19l.091-.277-3.801-1.244-.091.277 3.801 1.245zm-2.993.713l.248.182 2.366-3.225-.247-.182-2.367 3.225zm.246.18a8.222 8.222 0 002.493 1.247l1.157-3.829a4.22 4.22 0 01-1.28-.64l-2.37 3.223zm2.49 1.247l.18.054 1.161-3.828-.179-.054-1.161 3.828zm-1.23-2.043l-.017.18 3.983.365.016-.179-3.983-.366zm-.018.192a3.081 3.081 0 00.555 2.043l3.264-2.312a.918.918 0 01.166.61l-3.985-.341zm.543 2.026c.368.531.89.936 1.496 1.161l1.39-3.75c.163.06.303.168.402.31l-3.288 2.28zm1.496 1.161a3.154 3.154 0 001.89.095l-1.006-3.87a.846.846 0 01.507.025l-1.391 3.75zm1.901.093c.302-.08.59-.207.853-.374l-2.141-3.378a.935.935 0 01.26-.114l1.028 3.866zm.857-.376l4.825-3.076-2.15-3.373-4.825 3.076 2.15 3.373zm4.815-3.07c.354-.222.657-.516.89-.861l-3.315-2.238a.996.996 0 01.294-.286l2.131 3.385zm.89-.861c.234-.346.392-.737.467-1.148l-3.937-.71a.995.995 0 01.155-.38l3.315 2.238zm.468-1.155c.07-.402.061-.814-.029-1.212l-3.901.882a.929.929 0 01-.01-.366l3.94.696zm-.029-1.212a3.07 3.07 0 00-.495-1.106l-3.257 2.323a.928.928 0 01-.15-.335l3.902-.882zm-.48-1.084a3.155 3.155 0 00-1.495-1.16l-1.392 3.75a.844.844 0 01-.4-.311l3.287-2.279zm-1.495-1.16a3.154 3.154 0 00-1.89-.096l1.005 3.871a.845.845 0 01-.507-.025l1.392-3.75zm-1.902-.093c-.301.08-.589.206-.852.373l2.14 3.378a.934.934 0 01-.26.114L13.77 10.4zm-.857.376l-1.84 1.173 2.15 3.373 1.84-1.174-2.15-3.373zm-1.838 1.171a1.526 1.526 0 01-.425.187l1.033 3.864a5.524 5.524 0 001.537-.674l-2.145-3.377zm-.411.183a1.833 1.833 0 01-1.098-.055l-1.39 3.75c1.119.415 2.338.477 3.494.177l-1.006-3.872zm-1.098-.055a1.832 1.832 0 01-.87-.674L5.41 13.68a5.833 5.833 0 002.765 2.145l1.39-3.751zm-.885-.697a1.547 1.547 0 01-.25-.558l-3.902.882c.163.72.468 1.401.897 2.002l3.255-2.326zm-.25-.558c-.046-.2-.05-.408-.015-.611l-3.938-.7a5.546 5.546 0 00.051 2.193l3.902-.882zm-.015-.607c.032-.182.103-.355.206-.508L5.307 7.465a5.328 5.328 0 00-.828 2.039l3.937.708zm.206-.508c.104-.153.238-.283.394-.381L6.89 5.935a5.328 5.328 0 00-1.582 1.53l3.315 2.239zm.405-.388l4.825-3.075-2.15-3.374-4.824 3.075 2.15 3.374zm4.824-3.075a1.52 1.52 0 01.424-.186L13.24 2.191a5.522 5.522 0 00-1.537.676L13.85 6.24zm.41-.182a1.833 1.833 0 011.098.055l1.39-3.75a5.833 5.833 0 00-3.494-.176l1.006 3.871zm1.098.055c.352.13.655.366.87.674l3.286-2.28a5.832 5.832 0 00-2.765-2.144l-1.39 3.75zm.885.697c.12.167.205.357.25.558l3.902-.882a5.546 5.546 0 00-.897-2.002l-3.255 2.326zm.25.558c.046.2.05.409.014.611l3.939.7a5.547 5.547 0 00-.051-2.193l-3.902.882zm.017.598a1.41 1.41 0 01-.048.186l3.798 1.255a5.41 5.41 0 00.183-.714l-3.933-.727zm-.05.191l-.09.278 3.801 1.244.09-.277-3.8-1.245zm2.992-.713l-.247-.181-2.364 3.226.247.181 2.364-3.226zm-.244-.18a8.219 8.219 0 00-2.494-1.246l-1.156 3.83c.46.138.893.355 1.28.64l2.37-3.223zM16.718 6.02l-.18-.055-1.16 3.828.18.055 1.16-3.828zm1.231 2.044l.017-.179-3.983-.37-.017.18 3.983.37zm.018-.194a3.084 3.084 0 00-.553-2.04l-3.268 2.307a.917.917 0 01-.164-.607l3.985.34zm-.543-2.026a3.155 3.155 0 00-1.496-1.161l-1.39 3.75a.846.846 0 01-.402-.31l3.288-2.28zm-1.496-1.161a3.154 3.154 0 00-1.89-.095l1.006 3.87a.846.846 0 01-.507-.025l1.391-3.75zm-1.901-.093c-.302.08-.59.206-.853.373l2.141 3.379a.937.937 0 01-.26.114L14.027 4.59zm-.857.376L8.344 8.042l2.15 3.373 4.826-3.076-2.15-3.373zm-4.816 3.07a3.003 3.003 0 00-.89.862l3.315 2.237a.998.998 0 01-.295.286l-2.13-3.386zm-.89.862a3.003 3.003 0 00-.467 1.148l3.937.707a.997.997 0 01-.155.382L7.463 8.898zm-.467 1.152a3.07 3.07 0 00.028 1.212l3.902-.88c.027.12.03.246.008.367l-3.938-.699zm.028 1.212c.09.399.258.775.494 1.107l3.258-2.321c.072.1.122.214.15.335l-3.902.88zm.48 1.086c.367.53.89.936 1.495 1.16l1.392-3.75c.162.06.301.169.4.311l-3.287 2.279zM9 13.508a3.155 3.155 0 001.89.097L9.885 9.732a.845.845 0 01.507.025L9 13.508zm1.903.093c.3-.08.587-.206.85-.372l-2.14-3.38a.932.932 0 01.26-.113l1.03 3.865zm.855-.375l1.841-1.174-2.15-3.373-1.84 1.173 2.15 3.374zm1.84-1.173a1.51 1.51 0 01.422-.185l-1.03-3.865a5.51 5.51 0 00-1.54.676l2.149 3.374zm.41-.182a1.833 1.833 0 011.098.055l1.39-3.75A5.833 5.833 0 0013.002 8l1.006 3.87zm1.098.055c.352.13.655.366.869.674l3.286-2.28a5.833 5.833 0 00-2.765-2.144l-1.39 3.75zm.885.697c.12.167.204.357.25.558l3.901-.882a5.548 5.548 0 00-.897-2.002l-3.254 2.326zm.25.558c.045.2.05.409.014.611l3.938.7a5.545 5.545 0 00-.05-2.193l-3.902.882zm.015.608a1.331 1.331 0 01-.207.508l3.316 2.237a5.33 5.33 0 00.828-2.038l-3.937-.707zm-.207.508a1.33 1.33 0 01-.394.382l2.13 3.386a5.329 5.329 0 001.58-1.531l-3.316-2.237zm-.403.388L10.82 17.76l2.15 3.374 4.825-3.074-2.15-3.374zM10.82 17.76c-.13.083-.273.146-.423.186l1.033 3.864a5.52 5.52 0 001.538-.676l-2.148-3.374z"
        mask="url(#path-1-outside-1_20571_794)"
      ></path>
    </svg>
  );
};

export default Svelte;
