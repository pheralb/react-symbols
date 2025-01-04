import type { ComponentProps, FC } from "react";

const FolderGradle: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#64748B"
      fillRule="evenodd"
      d="M5 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h7v-2H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2.784a1 1 0 0 1 .635.227l2.393 1.966a3 3 0 0 0 1.904.682H19a1 1 0 0 1 1 1V10h2v-.125a3 3 0 0 0-3-3h-6.284a1 1 0 0 1-.635-.227L9.688 4.682A3 3 0 0 0 7.784 4z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#2DD4BF"
      d="M23.457 12.443A1.63 1.63 0 0 0 22.362 12a1.63 1.63 0 0 0-1.11.407.15.15 0 0 0-.048.103q0 .062.045.105l.197.195a.155.155 0 0 0 .198.013.93.93 0 0 1 .544-.173c.18 0 .356.05.506.145s.267.23.336.388c.069.159.087.334.052.502a.86.86 0 0 1-.25.444c-1.259 1.2-2.939-2.163-6.752-.433a.52.52 0 0 0-.275.298.47.47 0 0 0 .044.395l.653 1.078c.069.112.18.194.312.228a.54.54 0 0 0 .39-.045l.016-.008-.013.008.29-.155q.485-.287.912-.65a.165.165 0 0 1 .21 0 .14.14 0 0 1 .056.11.14.14 0 0 1-.05.11q-.45.382-.962.681h-.01l-.289.154a.864.864 0 0 1-.816-.005.8.8 0 0 1-.305-.287l-.618-1.019c-1.187.8-1.908 2.34-1.52 4.294a.14.14 0 0 0 .051.084q.041.032.096.033h.704a.15.15 0 0 0 .1-.036.14.14 0 0 0 .05-.09.97.97 0 0 1 .34-.614 1.06 1.06 0 0 1 .682-.246c.252 0 .494.088.682.246a.97.97 0 0 1 .341.614.14.14 0 0 0 .05.09.16.16 0 0 0 .1.036h.687a.15.15 0 0 0 .099-.036.14.14 0 0 0 .05-.09.97.97 0 0 1 .342-.612c.189-.158.43-.245.681-.245s.493.087.681.245.31.375.343.613a.14.14 0 0 0 .05.09.15.15 0 0 0 .099.035h.678q.062-.001.105-.041a.14.14 0 0 0 .045-.1c.016-.91.274-1.957 1.008-2.48 2.544-1.815 1.875-3.371 1.286-3.936m-2.595 2.745-.485-.232a.3.3 0 0 1 .038-.143.3.3 0 0 1 .106-.106.316.316 0 0 1 .413.085.28.28 0 0 1 .025.283.3.3 0 0 1-.097.114z"
    ></path>
  </svg>
);

export default FolderGradle;