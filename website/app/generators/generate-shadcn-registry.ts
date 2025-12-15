import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";
import { execSync } from "child_process";
import { pascalToTitle } from "../utils";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(
  path.dirname(path.dirname(path.dirname(__filename))),
);

interface RegistryFile {
  path: string;
  type: "registry:ui" | "registry:component";
}

interface RegistryItem {
  name: string;
  type: "registry:ui";
  title: string;
  description: string;
  registryDependencies: string[];
  files: RegistryFile[];
}

interface Registry {
  $schema: string;
  name: string;
  homepage: string;
  items: RegistryItem[];
}

function generateRegistryItems(
  directory: string,
  prefix: string = "",
): RegistryItem[] {
  const items: RegistryItem[] = [];
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isFile() && file.endsWith(".tsx")) {
      const componentName = file.replace(".tsx", "");
      const fileName = file;
      const filePath = prefix
        ? `../library/src/library/${prefix}/${fileName}`
        : `../library/src/library/${fileName}`;

      items.push({
        name: componentName,
        type: "registry:ui",
        title: pascalToTitle(componentName),
        description: `${pascalToTitle(componentName)} icon component.`,
        registryDependencies: [],
        files: [
          {
            path: filePath,
            type: "registry:ui",
          },
        ],
      });
    }
  }

  return items;
}

function generateRegistry(): void {
  const srcLibraryPath = path.join(__dirname, "library", "src", "library");
  const foldersPath = path.join(srcLibraryPath, "folders");
  const outputPath = path.join(__dirname, "website", "registry.json");
  const libraryItems = generateRegistryItems(srcLibraryPath);

  let folderItems: RegistryItem[] = [];

  if (fs.existsSync(foldersPath)) {
    folderItems = generateRegistryItems(foldersPath, "folders");
  }

  const allItems = [...libraryItems, ...folderItems];

  allItems.sort((a, b) => a.name.localeCompare(b.name));

  const registry: Registry = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "react-symbols",
    homepage: "https://react-symbols.vercel.app",
    items: allItems,
  };

  fs.writeFileSync(outputPath, JSON.stringify(registry, null, 2));

  console.log(`|- ✅ registry.json generated successfully`);
  console.log(
    `📦 Total components: ${allItems.length} / Files: ${libraryItems.length} / Folders: ${folderItems.length}`,
  );

  console.log(`\n|- 🔨 Running shadcn build...`);
  execSync("shadcn build", { stdio: "inherit" });

  console.log(`\n|- ✅ Registry /public/r generated successfully`);
}

// Run the generator
generateRegistry();
