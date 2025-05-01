import { Button } from "@/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { Theme, useTheme } from "remix-themes";

const ThemeSwitcher = () => {
  const [, setTheme] = useTheme();
  const iconSize = 14;

  const handleChangeTheme = (theme: Theme) => {
    setTheme(theme);
  };

  return (
    <span className="flex w-fit items-center overflow-hidden rounded-md border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-800/40">
      <Button
        variant="ghost"
        size="sm"
        className="rounded-none border-r border-zinc-200 px-2.5 dark:border-zinc-800"
        onClick={() => handleChangeTheme(Theme.LIGHT)}
      >
        <SunIcon size={iconSize} />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="rounded-none px-2.5"
        onClick={() => handleChangeTheme(Theme.DARK)}
      >
        <MoonIcon size={iconSize} />
      </Button>
    </span>
  );
};

export default ThemeSwitcher;
