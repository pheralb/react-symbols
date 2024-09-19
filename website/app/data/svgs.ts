import * as ReactSymbols from "@react-symbols/icons";

export interface iIcons {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const getIcons = (filterFn: (key: string) => boolean): iIcons[] => {
  return Object.keys(ReactSymbols)
    .filter(filterFn)
    .map((key) => ({
      name: key,
      icon: (
        ReactSymbols as Record<string, React.FC<React.SVGProps<SVGSVGElement>>>
      )[key],
    }));
};

export const Icons: iIcons[] = getIcons((key) => !key.startsWith("Folder"));
export const FoldersIcons: iIcons[] = getIcons((key) =>
  key.startsWith("Folder"),
);

export const totalLibraryIcons = [...Icons, ...FoldersIcons].length;
export const totalIcons = Icons.length;
export const totalFolders = FoldersIcons.length;
