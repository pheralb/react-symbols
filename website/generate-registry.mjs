import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 📂 Paths
const sourceBase = path.join(__dirname, "..", "library", "src", "library");
const outputBase = path.join(__dirname, "..", "website", "public", "r");

const sourceDirs = [
  { source: sourceBase, output: outputBase },
  {
    source: path.join(sourceBase, "folders"),
    output: path.join(outputBase, "folders"),
  },
];

let totalUpdated = 0;
let totalErrors = 0;
const errors = [];

// Asegurarse de que las carpetas de salida existen
for (const { output } of sourceDirs) {
  if (!fs.existsSync(output)) {
    fs.mkdirSync(output, { recursive: true });
  }
}

// Función para procesar ficheros
const processFiles = (source, target) => {
  if (!fs.existsSync(source)) return;

  const files = fs.readdirSync(source).filter((file) => file.endsWith(".tsx"));

  files.forEach((file) => {
    try {
      const filePath = path.join(source, file);
      const content = fs.readFileSync(filePath, "utf8");
      const nameWithoutExtension = path.basename(file, ".tsx");

      const json = {
        name: nameWithoutExtension,
        type: "registry:ui",
        registryDependencies: [],
        dependencies: [],
        devDependencies: [],
        tailwind: {},
        cssVars: {
          light: {},
          dark: {},
        },
        files: [
          {
            path: file,
            content: content,
            type: "registry:ui",
          },
        ],
      };

      const outputFilePath = path.join(target, `${nameWithoutExtension}.json`);
      fs.writeFileSync(outputFilePath, JSON.stringify(json, null, 2), "utf8");
      totalUpdated++;
    } catch (error) {
      totalErrors++;
      errors.push({ file, error });
    }
  });
};

// Procesar todos los directorios
for (const { source, output } of sourceDirs) {
  processFiles(source, output);
}

console.log("\n📦 Registry");
console.log(`✅ Updated Files: ${totalUpdated}`);
console.log(`📄 Total JSON Files: ${totalUpdated}`);
if (totalErrors > 0) {
  console.log(`❌ Errors: ${totalErrors}`);
  errors.forEach(({ file, error }) => {
    console.error(`- File: ${file}`);
    console.error(error);
  });
} else {
  console.log(`🚀 Errors: 0`);
}
