import * as ReactSymbols from "@react-symbols/icons";

export interface iIcons {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const Icons: iIcons[] = Object.keys(ReactSymbols)
  .filter((key) => !key.startsWith("Folder"))
  .map((key) => ({
    name: key,
    icon: (
      ReactSymbols as Record<string, React.FC<React.SVGProps<SVGSVGElement>>>
    )[key],
  }));

export const FoldersIcons: iIcons[] = Object.keys(ReactSymbols)
  .filter((key) => key.startsWith("Folder"))
  .map((key) => ({
    name: key,
    icon: (
      ReactSymbols as Record<string, React.FC<React.SVGProps<SVGSVGElement>>>
    )[key],
  }));

export const totalIcons = Icons.length;
export const totalFolders = FoldersIcons.length;
