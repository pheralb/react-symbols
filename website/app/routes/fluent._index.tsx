import { useLoaderData, useSearchParams } from "react-router";
import { useDeferredValue } from "react";

import { FluentIcons, type iIcons } from "@/data/svgs";
import { searchParamKey, iconSizeParamKey } from "@/data/searchParams";

import Grid from "@/components/grid";
import Loading from "@/components/loading";
import NotFound from "@/components/notFound";
import Card from "@/components/card/cardItem";

import { cn } from "@/utils";
import { containerClasses } from "@/ui/container";

export async function clientLoader() {
  const data = FluentIcons;
  return data;
}

export function HydrateFallback() {
  return (
    <Loading size={55} className="my-10 flex items-center justify-center" />
  );
}

export default function Fluent() {
  const data = useLoaderData<typeof clientLoader>();
  const [searchParams] = useSearchParams();
  const search = searchParams.get(searchParamKey) || "";
  const iconSizeValue = searchParams.get(iconSizeParamKey) || 30;
  const deferredSize = useDeferredValue(Number(iconSizeValue));

  const filteredIcons = data.filter((icon) =>
    icon.name.toLowerCase().includes(search.toLowerCase()),
  ) as unknown as iIcons[];

  return (
    <main>
      {filteredIcons.length === 0 ? (
        <NotFound input={search} iconType="fluent" />
      ) : (
        <Grid className={cn(containerClasses, "pt-6 pb-16")}>
          {filteredIcons.map((icon) => {
            return (
              <Card
                key={icon.name}
                iconType="fluent"
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
