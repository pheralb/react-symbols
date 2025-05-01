import { Button } from "@/ui/button";
import { cn } from "@/utils";
import { MoonIcon, SunIcon } from "lucide-react";
import { Theme, useTheme } from "remix-themes";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useTheme();
  const iconSize = 14;

  const handleChangeTheme = (theme: Theme) => {
    setTheme(theme);
  };

  return (
    <span className="flex w-fit items-center overflow-hidden rounded-md border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-800/40">
      <Button
        title="Light mode"
        variant="ghost"
        size="sm"
        className={cn(
          "rounded-none border-r border-zinc-200 px-2.5 dark:border-zinc-800",
          Theme.LIGHT === theme && "bg-zinc-200",
        )}
        onClick={() => handleChangeTheme(Theme.LIGHT)}
      >
        <SunIcon size={iconSize} />
      </Button>
      <Button
        title="Dark mode"
        variant="ghost"
        size="sm"
        className={cn(
          "rounded-none px-2.5",
          Theme.DARK === theme && "dark:bg-zinc-800",
        )}
        onClick={() => handleChangeTheme(Theme.DARK)}
      >
        <MoonIcon size={iconSize} />
      </Button>
    </span>
  );
};

export default ThemeSwitcher;
