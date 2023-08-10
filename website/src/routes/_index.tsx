import { useState } from "react"
import type { V2_MetaFunction } from "@remix-run/node"
import Container from "@/components/container"
import Search from "@/components/search"

import { Icons } from "@/data/svgs"
import Card from "@/components/card"
import Grid from "@/components/grid"

export const meta: V2_MetaFunction = () => {
  return [{ title: "Files - React-Symbols" }]
}

export default function Index() {
  const [search, setSearch] = useState("")

  const filteredIcons = Icons.filter((icon) =>
    icon.name.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <Container>
      <section className="sticky top-0 z-10 bg-neutral-900 py-3">
        <Search
          placeholder={`Search ${Icons.length} files icons...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoFocus
          clear={search.length > 0}
          clearaction={() => setSearch("")}
        />
      </section>
      <Grid>
        {filteredIcons
          .sort((iconA, iconB) => (iconA.name > iconB.name ? 1 : -1))
          .map(({ name, icon: SVGIcon }) => (
            <Card key={name} name={name} icon={<SVGIcon width={50} />} />
          ))}
      </Grid>
      {filteredIcons.length === 0 && (
        <div className="bg-midgnight flex flex-col items-center justify-center">
          <p className="font-light text-gray-300">🤔 No icons found</p>
        </div>
      )}
    </Container>
  )
}
