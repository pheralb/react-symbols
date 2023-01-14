import Card from "@/components/card";
import { Icons } from "@/data/icons";
import { ComponentProps, FC, useState } from "react";

interface IconData {
  name: string;
  icon: FC<ComponentProps<"svg">>;
}

export default function Index() {
  const [search, setSearch] = useState("");

  // Search
  const filteredIcons = Icons.filter((icon) =>
    icon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-5 py-3 mb-4 text-white border rounded-md border-neutral-800 bg-midnight focus:outline-none focus:border-gray-500"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 lg:grid-cols-6">
        {filteredIcons
          .sort((iconA, iconB) => (iconA.name > iconB.name ? 1 : -1))
          .map(({ name, icon: Icon }: IconData) => (
            <Card
              key={name}
              name={name}
              icon={<Icon className="w-16 h-16" />}
            />
          ))}
      </div>
      {filteredIcons.length === 0 && (
        <div className="flex flex-col items-center justify-center bg-midgnight">
          <p className="font-light text-gray-300">🤔 No icons found</p>
        </div>
      )}
    </>
  );
}
