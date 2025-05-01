import { useTheme } from "@/theme/themeProvider";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const [theme] = useTheme();
  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      position="bottom-center"
      toastOptions={{
        classNames: {
          toast:
            "group toast font-sans group-[.toaster]:bg-white group-[.toaster]:text-zinc-900 group-[.toaster]:border-zinc-200 group-[.toaster]:shadow-lg dark:group-[.toaster]:bg-zinc-900 dark:group-[.toaster]:text-zinc-50 dark:group-[.toaster]:border-zinc-800",
          description:
            "group-[.toast]:text-zinc-500 dark:group-[.toast]:text-zinc-400",
          actionButton:
            "group-[.toast]:bg-zinc-900 group-[.toast]:text-zinc-50 dark:group-[.toast]:bg-zinc-50 dark:group-[.toast]:text-zinc-900",
          cancelButton:
            "group-[.toast]:bg-zinc-100 group-[.toast]:text-zinc-500 dark:group-[.toast]:bg-zinc-800 dark:group-[.toast]:text-zinc-400",
          content: "group-[.toaster]:ml-2",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
