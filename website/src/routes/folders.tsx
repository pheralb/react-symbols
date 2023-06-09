import { useState } from "react"
import type { V2_MetaFunction } from "@remix-run/node"
import Container from "@/components/container"
import Search from "@/components/search"

import { Folders } from "@/data/svgs"
import type { iSVG } from "@/types/svgs.type"
import Card from "@/components/card"

export const meta: V2_MetaFunction = () => {
  return [{ title: "Folders - React-Symbols" }]
}

export default function FoldersPage() {
  const [search, setSearch] = useState("")

  const filteredIcons = Folders.filter((icon) =>
    icon.name.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <Container>
      <Search
        placeholder={`Search ${Folders.length} files icons...`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        autoFocus
        clear={search.length > 0}
        clearaction={() => setSearch("")}
      />
      <div className="mx-auto mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {filteredIcons
          .sort((iconA, iconB) => (iconA.name > iconB.name ? 1 : -1))
          .map(({ name, icon: SVGIcon }: iSVG) => (
            //@ts-ignore
            <Card key={name} name={name} icon={<SVGIcon width={50} />} />
          ))}
      </div>
      {filteredIcons.length === 0 && (
        <div className="bg-midgnight flex flex-col items-center justify-center">
          <p className="font-light text-gray-300">🤔 No icons found</p>
        </div>
      )}
    </Container>
  )
}
