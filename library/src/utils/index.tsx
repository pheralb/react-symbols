import type { JSX, SVGProps } from "react";
import type { ExtensionType } from "./extensions/types";

// Extensions
import { fileNameIcons } from "./extensions/fileNameIcons";
import { folderNameIcons } from "./extensions/folderNameIcons";
import { fileExtensionIcons } from "./extensions/fileExtensionIcons";

// Default Icons
import RsDocumentIcon from "../library/document";
import RsFolderIcon from "../library/folders/folder";
import RsFolderOpenIcon from "../library/folders/folderOpen";

interface GetIconForFileOptions extends SVGProps<SVGSVGElement> {
  fileName: string;
  autoAssign?: boolean | undefined;
  editFileNameData?: ExtensionType | undefined;
  editFileExtensionData?: ExtensionType | undefined;
}

interface GetIconForFolderOptions extends SVGProps<SVGSVGElement> {
  folderName: string;
  editFolderNameData?: ExtensionType | undefined;
}

/**
 * Default icon for unknown files.
 * @constant
 */
const DefaultFileIcon = RsDocumentIcon;

/**
 * Default icon for unknown folders.
 * @constant
 */
const DefaultFolderIcon = RsFolderIcon;

/**
 * Default icon for opened folders.
 * @constant
 */
const DefaultFolderOpenedIcon = RsFolderOpenIcon;

/**
 * Gets the best matching extension for a file name.
 * Tries compound extensions first (e.g., "svelte.ts"), then falls back to simple extension.
 * @param fileTitle File name.
 * @returns The matched extension key.
 */
const getFileExtension = (fileTitle: string): string => {
  const parts = fileTitle.toLowerCase().split(".");
  if (parts.length <= 1) return "";
  for (let i = parts.length - 2; i >= 0; i--) {
    const compound = parts.slice(i).join(".");
    if (fileExtensionIcons[compound]) {
      return compound;
    }
  }
  return parts[parts.length - 1] ?? "";
};

/**
 * Gets the icon for a file based on its extension.
 * @param fileName File name (e.g., "example.ts", "example.css").
 * @param autoAssign Auto-assign icons based on file name (e.g., "vite.config.js" -> Vite icon).
 * @param editFileNameData Optional additional file name-to-icon mappings (activate `autoAssign` first).
 * @param editFileExtensionData Optional additional extension-to-icon mappings.
 * @param props Optional SVG properties for the icon.
 * @returns JSX element of the corresponding icon.
 */
const getIconForFile = ({
  fileName,
  autoAssign,
  editFileNameData,
  editFileExtensionData,
  ...props
}: GetIconForFileOptions): JSX.Element => {
  const extension = getFileExtension(fileName);

  const mergedFileNameIcons = editFileNameData
    ? { ...fileNameIcons, ...editFileNameData }
    : fileNameIcons;

  const mergedFileExtensionIcons = editFileExtensionData
    ? { ...fileExtensionIcons, ...editFileExtensionData }
    : fileExtensionIcons;

  if (autoAssign) {
    const fileKey = fileName.toLowerCase();
    const Icon =
      mergedFileNameIcons[fileKey] ??
      mergedFileExtensionIcons[extension] ??
      DefaultFileIcon;
    return <Icon {...props} />;
  }
  const Icon = mergedFileExtensionIcons[extension] ?? DefaultFileIcon;
  return <Icon {...props} />;
};

/**
 * React component to render a file icon based on its extension.
 * @param fileName File name (e.g., "example.ts").
 * @param autoAssign Auto-assign icons based on file name (e.g., "vite.config.js" -> Vite icon).
 * @param editFileNameData Optional additional file name-to-icon mappings (activate `autoAssign` first).
 * @param editFileExtensionData Optional additional extension-to-icon mappings.
 * @param props Optional SVG properties for the icon.
 * @returns JSX element of the corresponding icon.
 */
const FileIcon = ({
  fileName,
  autoAssign,
  editFileNameData,
  ...props
}: GetIconForFileOptions) => {
  return getIconForFile({
    fileName,
    autoAssign,
    editFileNameData,
    ...props,
  });
};

/**
 * Gets the icon for a folder based on its name.
 * @param folderName Folder name.
 * @param props Optional SVG properties for the icon.
 * @returns JSX element of the corresponding icon.
 */
const getIconForFolder = ({
  folderName,
  editFolderNameData,
  ...props
}: GetIconForFolderOptions): JSX.Element => {
  const mergedFolderNameIcons = editFolderNameData
    ? { ...folderNameIcons, ...editFolderNameData }
    : folderNameIcons;

  const Icon = mergedFolderNameIcons[folderName] ?? DefaultFolderIcon;
  return <Icon {...props} />;
};

/**
 * React component to render a folder icon based on its name.
 * @param folderName Folder name.
 * @param editFolderNameData Optional additional folder name-to-icon mappings.
 * @param props Optional SVG properties for the icon.
 * @returns JSX element of the corresponding icon.
 */
const FolderIcon = ({
  folderName,
  editFolderNameData,
  ...props
}: GetIconForFolderOptions) => {
  return getIconForFolder({ folderName, editFolderNameData, ...props });
};

export {
  FileIcon,
  FolderIcon,
  getIconForFile,
  getIconForFolder,
  DefaultFileIcon,
  DefaultFolderIcon,
  DefaultFolderOpenedIcon,
  type ExtensionType,
};
