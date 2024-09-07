import { useSearchParams } from "@remix-run/react";
import { FoldersIcons, totalFolders } from "@/data/svgs";

import Navbar from "@/components/navbar";
import Card from "@/components/card";
import Grid from "@/components/grid";

import { cn } from "@/utils";
import { containerClasses } from "@/ui/container";
import { useDeferredValue, useState } from "react";

const Folders = () => {
  const [searchParams] = useSearchParams();
  const [size, setSize] = useState<number>(45);
  const deferredSize = useDeferredValue(size);
  const search = searchParams.get("q") || "";

  const filteredIcons = FoldersIcons.filter((icon) =>
    icon.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <main>
      <Navbar
        searchPlaceholder={`Search ${totalFolders} folder icons...`}
        iconSize={deferredSize}
        onChangeIconSize={setSize}
      />
      <Grid className={cn(containerClasses, "py-6")}>
        {filteredIcons.map((icon) => {
          return (
            <Card key={icon.name} isFolder={true} iconSize={size} {...icon} />
          );
        })}
      </Grid>
    </main>
  );
};

export default Folders;
