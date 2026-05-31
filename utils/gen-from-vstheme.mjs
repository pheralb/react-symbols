#!/usr/bin/env node
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const EXTENSIONS_DIR = join(ROOT, "library/src/utils/extensions");
const THEME_URL =
  "https://raw.githubusercontent.com/miguelsolorio/vscode-symbols/refs/heads/main/src/symbol-icon-theme.json";

console.log("|- Fetching icon theme from GitHub...");
const res = await fetch(THEME_URL);
if (!res.ok) throw new Error(`|- X - Failed to fetch theme: ${res.status}`);
const theme = await res.json();

const { iconDefinitions, fileExtensions, fileNames, folderNames } = theme;

function extractExportedNames(filePath) {
  const content = readFileSync(filePath, "utf-8");
  const names = new Set();
  for (const m of content.matchAll(/export\s+\{([^}]+)\}/g)) {
    for (const part of m[1].split(",")) {
      const name = part.trim().replace(/^.*\bas\s+/, "");
      if (/^[A-Z]/.test(name)) names.add(name.trim());
    }
  }
  return names;
}

const fileComponents = extractExportedNames(
  join(ROOT, "library/src/files.tsx"),
);
const folderComponents = extractExportedNames(
  join(ROOT, "library/src/folders.tsx"),
);
const allComponents = new Set([...fileComponents, ...folderComponents]);

console.log(`|- Loaded ${allComponents.size} components from library.`);

function toPascalCase(str) {
  return str
    .split(/[-_]/)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("");
}

function resolveFileComponent(iconName) {
  const candidate = toPascalCase(iconName);
  return allComponents.has(candidate) ? candidate : null;
}

function resolveFolderComponent(iconName) {
  const stripped = iconName.replace(/^folder[-_]?/, "");
  const candidate = stripped ? "Folder" + toPascalCase(stripped) : "Folder";
  if (allComponents.has(candidate)) return candidate;
  const direct = toPascalCase(iconName);
  return allComponents.has(direct) ? direct : null;
}

function parseExistingKeys(filePath) {
  const content = readFileSync(filePath, "utf-8");
  const keys = new Set();
  for (const m of content.matchAll(
    /^\s+"?([^":\s,{}]+)"?\s*:\s*ReactSymbol\./gm,
  )) {
    keys.add(m[1]);
  }
  return { content, keys };
}

function formatKey(key) {
  return /[.\-\s]/.test(key) || key.startsWith(".") ? `"${key}"` : key;
}

const fileIconNames = new Set(
  Object.keys(iconDefinitions).filter((k) => !k.startsWith("folder")),
);

console.log(
  `|- Theme has ${fileIconNames.size} file icons, ${Object.keys(folderNames ?? {}).length} folder names, ${Object.keys(fileNames ?? {}).length} file names, ${Object.keys(fileExtensions ?? {}).length} file extensions.`,
);

const extFilePath = join(EXTENSIONS_DIR, "fileExtensionIcons.tsx");
const folderFilePath = join(EXTENSIONS_DIR, "folderNameIcons.tsx");
const nameFilePath = join(EXTENSIONS_DIR, "fileNameIcons.tsx");

const { content: extContent, keys: extKeys } = parseExistingKeys(extFilePath);
const { content: folderContent, keys: folderKeys } =
  parseExistingKeys(folderFilePath);
const { content: nameContent, keys: nameKeys } =
  parseExistingKeys(nameFilePath);

function buildNewEntries(
  sourceMap,
  existingKeys,
  resolveComponent,
  filterToFileIcons,
) {
  const entries = [];
  const skipped = [];

  for (const [key, iconName] of Object.entries(sourceMap ?? {})) {
    if (existingKeys.has(key)) continue;
    if (filterToFileIcons && !fileIconNames.has(iconName)) continue;

    const component = resolveComponent(iconName);
    if (!component) {
      skipped.push(`${key} (icon: ${iconName})`);
      continue;
    }
    entries.push(`  ${formatKey(key)}: ReactSymbol.${component},`);
  }

  return { entries, skipped };
}

const { entries: newExtEntries, skipped: skippedExt } = buildNewEntries(
  fileExtensions,
  extKeys,
  resolveFileComponent,
  true,
);

const { entries: newFolderEntries, skipped: skippedFolders } = buildNewEntries(
  folderNames,
  folderKeys,
  resolveFolderComponent,
  false,
);

const { entries: newNameEntries, skipped: skippedNames } = buildNewEntries(
  fileNames,
  nameKeys,
  resolveFileComponent,
  true,
);

function insertEntries(content, newEntries) {
  if (newEntries.length === 0) return null;
  const insertAt = content.lastIndexOf("};");
  if (insertAt === -1) throw new Error("Could not find closing `};` in file.");
  return (
    content.slice(0, insertAt) +
    newEntries.join("\n") +
    "\n" +
    content.slice(insertAt)
  );
}

function applyUpdate(filePath, content, newEntries, label, skipped) {
  if (newEntries.length > 0) {
    const updated = insertEntries(content, newEntries);
    writeFileSync(filePath, updated, "utf-8");
    console.log(`✓ ${label}: added ${newEntries.length} entries.`);
  } else {
    console.log(`✓ ${label}: no new entries.`);
  }
  if (skipped.length > 0) {
    console.log(
      `  ↳ ${skipped.length} skipped (no matching component): ${skipped.slice(0, 5).join(", ")}${skipped.length > 5 ? ` …+${skipped.length - 5} more` : ""}`,
    );
  }
}

applyUpdate(
  extFilePath,
  extContent,
  newExtEntries,
  "fileExtensionIcons",
  skippedExt,
);
applyUpdate(
  folderFilePath,
  folderContent,
  newFolderEntries,
  "folderNameIcons",
  skippedFolders,
);
applyUpdate(
  nameFilePath,
  nameContent,
  newNameEntries,
  "fileNameIcons",
  skippedNames,
);

console.log("\nDone.");
