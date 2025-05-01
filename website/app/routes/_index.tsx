import { useDeferredValue } from "react";
import { useLoaderData, useSearchParams } from "react-router";

import { Icons, type iIcons } from "@/data/svgs";
import { searchParamKey, iconSizeParamKey } from "@/data/searchParams";

import Grid from "@/components/grid";
import Card from "@/components/card/cardItem";
import Loading from "@/components/loading";
import NotFound from "@/components/notFound";

import { cn } from "@/utils";
import { containerClasses } from "@/ui/container";

export async function clientLoader() {
  const data = Icons;
  return data;
}

export function HydrateFallback() {
  return (
    <Loading size={55} className="my-10 flex items-center justify-center" />
  );
}

export default function Index() {
  const data = useLoaderData<typeof clientLoader>();
  const [searchParams] = useSearchParams();
  const search = searchParams.get(searchParamKey) || "";
  const iconSizeValue = searchParams.get(iconSizeParamKey) || 45;
  const deferredSize = useDeferredValue(Number(iconSizeValue));

  const filteredIcons = data.filter((icon) =>
    icon.name.toLowerCase().includes(search.toLowerCase()),
  ) as unknown as iIcons[];

  return (
    <main className="animate-in fade-in-60">
      {filteredIcons.length === 0 ? (
        <NotFound input={search} />
      ) : (
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
      )}
    </main>
  );
}
