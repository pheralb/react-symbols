import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 📂 Types
interface FolderConfig {
  source: string;
  output: string;
}

interface RegistryFile {
  path: string;
  content: string;
  type: string;
}

interface RegistryJson {
  $schema: string;
  name: string;
  type: string;
  registryDependencies: string[];
  files: RegistryFile[];
}

interface ProcessError {
  file: string;
  error: unknown;
}

// 📂 Paths
const sourceBase = path.join(__dirname, "..", "library", "src", "library");
const outputBase = path.join(__dirname, "..", "website", "public", "r");

const mainFolders: FolderConfig[] = [
  { source: sourceBase, output: outputBase },
  {
    source: path.join(sourceBase, "folders"),
    output: path.join(outputBase, "folders"),
  },
];

let totalUpdated = 0;
let totalErrors = 0;
const errors: ProcessError[] = [];

for (const { output } of mainFolders) {
  if (!fs.existsSync(output)) {
    fs.mkdirSync(output, { recursive: true });
  }
}

const processFiles = (
  source: string,
  target: string,
  recursive = true,
): void => {
  if (!fs.existsSync(source)) {
    console.log(`|- ⚠️ Directory not found: ${source}`);
    return;
  }

  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  const items = fs.readdirSync(source, { withFileTypes: true });

  items
    .filter((item) => item.isFile() && item.name.endsWith(".tsx"))
    .forEach((item) => {
      try {
        const filePath = path.join(source, item.name);
        const content = fs.readFileSync(filePath, "utf8");
        const nameWithoutExtension = path.basename(item.name, ".tsx");

        const json: RegistryJson = {
          $schema: "https://ui.shadcn.com/schema/registry-item.json",
          name: nameWithoutExtension,
          type: "registry:ui",
          registryDependencies: [],
          files: [
            {
              path: item.name,
              content: content,
              type: "registry:ui",
            },
          ],
        };

        const outputFilePath = path.join(
          target,
          `${nameWithoutExtension}.json`,
        );
        fs.writeFileSync(outputFilePath, JSON.stringify(json, null, 2), "utf8");
        totalUpdated++;
      } catch (error) {
        totalErrors++;
        errors.push({ file: item.name, error });
        console.error(`❌ Error with following file: ${item.name}`);
      }
    });

  if (recursive) {
    items
      .filter((item) => item.isDirectory())
      .forEach((dir) => {
        const newSourcePath = path.join(source, dir.name);
        const newTargetPath = path.join(target, dir.name);
        processFiles(newSourcePath, newTargetPath, recursive);
      });
  }
};

// Procesar las estructuras de directorios principales
for (const { source, output } of mainFolders) {
  processFiles(source, output);
}

console.log("\n📦 Registry");
console.log(`|- ✅ JSON Generated: ${totalUpdated}`);
if (totalErrors > 0) {
  console.log(`|- ❌ Errors: ${totalErrors}`);
  errors.forEach(({ file, error }) => {
    console.error(`|- File: ${file}`);
    console.error(error);
  });
} else {
  console.log(`|- 🚀 Errors: 0`);
}
