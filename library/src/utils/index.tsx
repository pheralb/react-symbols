import type { JSX, SVGProps } from "react";
import type { ExtensionType } from "./extensions/types";

// Extensions
import { fileNameIcons } from "./extensions/fileNameIcons";
import { folderNameIcons } from "./extensions/folderNameIcons";
import { fileExtensionIcons } from "./extensions/fileExtensionIcons";

// Default Icons
import RsDocumentIcon from "../library/document";
import RsFolderIcon from "../library/folders/folder";
import FolderOpenIcon from "../library/folders/folderOpen";

interface GetIconForFileOptions extends SVGProps<SVGSVGElement> {
  fileName: string;
  autoAssign?: boolean | undefined;
  extendAssignmentData?: ExtensionType | undefined;
}

interface GetIconForFolderOptions extends SVGProps<SVGSVGElement> {
  folderName: string;
  extendAssignmentData?: ExtensionType | undefined;
}

/**
 * Default icon for unknown files.
 * @constant
 */
const DEFAULT_FILE_ICON = RsDocumentIcon;

/**
 * Default icon for unknown folders.
 * @constant
 */
const DEFAULT_FOLDER_ICON = RsFolderIcon;

/**
 * Default icon for opened folders.
 * @constant
 */
const DEFAULT_FOLDER_OPENED_ICON = FolderOpenIcon;

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
 * @param extendAssignmentData Optional additional extension-to-icon mappings (activate ``autoAssign`` first).
 * @param props Optional SVG properties for the icon.
 * @returns JSX element of the corresponding icon.
 */
const getIconForFile = ({
  fileName,
  autoAssign,
  extendAssignmentData,
  ...props
}: GetIconForFileOptions): JSX.Element => {
  const extension = getFileExtension(fileName);
  if (extendAssignmentData) {
    Object.assign(fileNameIcons, extendAssignmentData);
  }
  if (autoAssign) {
    const fileKey = fileName.toLowerCase();
    const Icon =
      fileNameIcons[fileKey] ??
      fileExtensionIcons[extension] ??
      DEFAULT_FILE_ICON;
    return <Icon {...props} />;
  }
  const Icon = fileExtensionIcons[extension] ?? DEFAULT_FILE_ICON;
  return <Icon {...props} />;
};

/**
 * React component to render a file icon based on its extension.
 * @param fileName File name (e.g., "example.ts").
 * @param autoAssign Auto-assign icons based on file name (e.g., "vite.config.js" -> Vite icon).
 * @param extendAssignmentData Optional additional extension-to-icon mappings (activate ``autoAssign`` first).
 * @param props Optional SVG properties for the icon.
 * @returns JSX element of the corresponding icon.
 */
const FileIcon = ({
  fileName,
  autoAssign,
  extendAssignmentData,
  ...props
}: GetIconForFileOptions) => {
  return getIconForFile({
    fileName,
    autoAssign,
    extendAssignmentData,
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
  extendAssignmentData,
  ...props
}: GetIconForFolderOptions): JSX.Element => {
  if (extendAssignmentData) {
    Object.assign(folderNameIcons, extendAssignmentData);
  }
  const Icon = folderNameIcons[folderName] ?? DEFAULT_FOLDER_ICON;
  return <Icon {...props} />;
};

/**
 * React component to render a folder icon based on its name.
 * @param folderName Folder name.
 * @param extendAssignmentData Optional additional extension-to-icon mappings.
 * @param props Optional SVG properties for the icon.
 * @returns JSX element of the corresponding icon.
 */
const FolderIcon = ({
  folderName,
  extendAssignmentData,
  ...props
}: GetIconForFolderOptions) => {
  return getIconForFolder({ folderName, extendAssignmentData, ...props });
};

export {
  FileIcon,
  FolderIcon,
  getIconForFile,
  getIconForFolder,
  DEFAULT_FILE_ICON,
  DEFAULT_FOLDER_ICON,
  DEFAULT_FOLDER_OPENED_ICON,
};
