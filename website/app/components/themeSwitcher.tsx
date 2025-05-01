import { type Theme, useTheme } from "@/theme/themeProvider";
import { MoonIcon, SunIcon } from "lucide-react";
import { cn } from "@/utils";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useTheme();

  const buttons = [
    {
      label: "dark" as const,
      icon: <MoonIcon width={14} />,
      active: theme === "dark",
    },
    {
      label: "light" as const,
      icon: <SunIcon width={14} />,
      active: theme === "light",
    },
  ];

  return (
    <span className="flex w-fit items-center gap-0.5 overflow-hidden rounded-md border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-800/80">
      {buttons.map(({ label, icon, active }) => (
        <button
          type="button"
          title={`Switch to ${label} theme`}
          key={label}
          onClick={() => setTheme(() => label as Theme)}
          className={cn(
            "flex h-6 w-6 items-center justify-center rounded-none transition-all hover:opacity-50",
            active && "bg-zinc-200 dark:bg-zinc-900",
          )}
        >
          {icon}
        </button>
      ))}
    </span>
  );
};

export default ThemeSwitcher;
