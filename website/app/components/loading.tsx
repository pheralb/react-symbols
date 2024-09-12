import { cn } from "@/utils";

interface iLoading {
  className?: string;
}

const Loading = (props: iLoading) => (
  <div
    className={cn(
      "animate-in animate-out fade-in-40 flex flex-col space-y-2 duration-1000",
      props.className,
    )}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="animate-spin-slow"
      fill="none"
      viewBox="0 0 80 80"
      width={55}
      height={55}
    >
      <path
        fill="#2563EB"
        d="M61.433 51.345a9.076 9.076 0 11-18.152 0 9.076 9.076 0 0118.152 0z"
      ></path>
      <path
        fill="#0D9488"
        d="M18.567 24.117a4.538 4.538 0 014.538-4.538h9.076a4.538 4.538 0 014.538 4.538v9.076a4.538 4.538 0 01-4.538 4.538h-9.076a4.538 4.538 0 01-4.538-4.538v-9.076z"
      ></path>
      <path
        fill="#22D3EE"
        d="M27.643 43.485l9.076 15.72H18.567l9.076-15.72z"
      ></path>
      <path
        fill="#C084FC"
        d="M48.455 22.295c1.34-3.622 6.463-3.622 7.803 0a4.16 4.16 0 002.458 2.458c3.622 1.34 3.622 6.463 0 7.804a4.16 4.16 0 00-2.458 2.457c-1.34 3.622-6.463 3.622-7.803 0a4.16 4.16 0 00-2.458-2.457c-3.622-1.34-3.622-6.464 0-7.804a4.16 4.16 0 002.458-2.458z"
      ></path>
    </svg>
  </div>
);

export default Loading;
