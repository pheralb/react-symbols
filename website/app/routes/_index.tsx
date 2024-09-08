import { useSearchParams } from "@remix-run/react";
import { Icons, totalIcons } from "@/data/svgs";

import Navbar from "@/components/navbar";
import Grid from "@/components/grid";
import Card from "@/components/card";

import { cn } from "@/utils";
import { containerClasses } from "@/ui/container";
import { useDeferredValue, useState } from "react";

export default function Index() {
  const [searchParams] = useSearchParams();
  const [size, setSize] = useState<number>(45);
  const deferredSize = useDeferredValue(size);
  const search = searchParams.get("q") || "";

  const filteredIcons = Icons.filter((icon) =>
    icon.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main>
      <Navbar
        searchPlaceholder={`Search ${totalIcons} icons...`}
        iconSize={deferredSize}
        onChangeIconSize={setSize}
      />
      <Grid className={cn(containerClasses, "pb-14 pt-6")}>
        {filteredIcons.map((icon) => {
          return (
            <Card
              key={icon.name}
              isFolder={false}
              iconSize={deferredSize}
              {...icon}
            />
          );
        })}
      </Grid>
    </main>
  );
}
