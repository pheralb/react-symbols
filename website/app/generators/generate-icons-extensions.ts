const ICON_THEME_URL =
  "https://raw.githubusercontent.com/miguelsolorio/vscode-symbols/main/src/symbol-icon-theme.json";

interface IconDefinition {
  iconPath: string;
}

interface IconTheme {
  iconDefinitions: Record<string, IconDefinition>;
  fileExtensions: Record<string, string>;
  fileNames?: Record<string, string>;
  folderNames?: Record<string, string>;
}

function toPascalCase(str: string): string {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

async function fetchIconTheme(): Promise<IconTheme> {
  const response = await fetch(ICON_THEME_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch icon theme: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Generates TSX file with file extension mappings
 */
function generateTsxFile(
  fileExtensions: Record<string, string>,
  fileNames: Record<string, string>,
  iconDefinitions: Record<string, IconDefinition>,
): string {
  const imports = `import type { FC, SVGProps } from "react";\nimport * as ReactSymbol from "../index";\n\n`;
  const fileExtensionType = `interface FileExtensionType {\n  [extension: string]: FC<SVGProps<SVGSVGElement>>;\n}\n\n`;

  const fileMappingEntries = Object.entries(fileExtensions)
    .map(([ext, iconName]) => {
      const componentName = toPascalCase(iconName);
      return `  "${ext}": ReactSymbol.${componentName},`;
    })
    .join("\n");

  const fileMapping = `const fileExtensionIcons: FileExtensionType = {\n${fileMappingEntries}\n};\n\n`;
  const fileNameType = `interface FileNameType {\n  [fileName: string]: FC<SVGProps<SVGSVGElement>>;\n}\n\n`;

  const fileNameMappingEntries = Object.entries(fileNames)
    .map(([name, iconName]) => {
      const componentName = toPascalCase(iconName);
      return `  "${name}": ReactSymbol.${componentName},`;
    })
    .join("\n");

  const fileNameMapping = `const fileNameIcons: FileNameType = {\n${fileNameMappingEntries}\n};\n\n`;

  const folderExtensionType = `interface FolderExtensionType {\n  [folderName: string]: FC<SVGProps<SVGSVGElement>>;\n}\n\n`;

  const folderIcons = Object.keys(iconDefinitions).filter((key) =>
    key.startsWith("folder-"),
  );

  const folderMappingEntries = folderIcons
    .map((iconName) => {
      const componentName = toPascalCase(iconName);
      return `  "${iconName}": ReactSymbol.${componentName},`;
    })
    .join("\n");

  const folderMapping = `const folderExtensionIcons: FolderExtensionType = {\n${folderMappingEntries}\n};\n\n`;

  const exports = `export { fileExtensionIcons, FileExtensionType, fileNameIcons, FileNameType, folderExtensionIcons, FolderExtensionType };\n`;

  return (
    imports +
    fileExtensionType +
    fileMapping +
    fileNameType +
    fileNameMapping +
    folderExtensionType +
    folderMapping +
    exports
  );
}

async function main() {
  try {
    console.log("|- 🔍 Fetching icon theme from GitHub...");
    const iconTheme = await fetchIconTheme();

    console.log("|- ⚙️ Processing file extensions and file names...");
    const fileExtensions = iconTheme.fileExtensions;
    const fileNames = iconTheme.fileNames || {};
    const iconDefinitions = iconTheme.iconDefinitions;

    const totalExtensions = Object.keys(fileExtensions).length;
    const totalFileNames = Object.keys(fileNames).length;
    console.log(`✅ Found ${totalExtensions} file extensions`);
    console.log(`✅ Found ${totalFileNames} file names\n`);

    console.log("|- 📝 Generating TSX file...");
    const tsxContent = generateTsxFile(
      fileExtensions,
      fileNames,
      iconDefinitions,
    );

    const fs = await import("fs/promises");
    const path = await import("path");
    const outputPath = path.join(
      "..",
      "library",
      "src",
      "utils",
      "generated_file-extensions.tsx",
    );

    const outputDir = path.dirname(outputPath);
    await fs.mkdir(outputDir, { recursive: true });

    await fs.writeFile(outputPath, tsxContent, "utf-8");
    console.log(`|- ✅ TSX file written to: ${outputPath}`);
  } catch (error) {
    console.error(
      "|- ❌ Error:",
      error instanceof Error ? error.message : error,
    );
    process.exit(1);
  }
}

main();
