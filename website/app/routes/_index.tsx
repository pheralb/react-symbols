import { useDeferredValue } from "react";
import { useLoaderData, useSearchParams } from "@remix-run/react";

import { Icons, iIcons } from "@/data/svgs";
import { searchParamKey, iconSizeParamKey } from "@/data/searchParams";

import Grid from "@/components/grid";
import Card from "@/components/card";

import { cn } from "@/utils";
import { containerClasses } from "@/ui/container";

export async function clientLoader() {
  const data = Icons;
  return data;
}

export function HydrateFallback() {
  return <p>Loading Icons...</p>;
}

export default function Index() {
  const data = useLoaderData<typeof clientLoader>();
  const [searchParams] = useSearchParams();
  const search = searchParams.get(searchParamKey) || "";
  const iconSizeValue = searchParams.get(iconSizeParamKey) || 45;
  const deferredSize = useDeferredValue(Number(iconSizeValue));

  const filteredIcons = data.filter((icon) =>
    icon.name.toLowerCase().includes(search.toLowerCase()),
  ) as iIcons[];

  return (
    <main>
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
