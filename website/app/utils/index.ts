import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const MIMETYPE = "text/plain";

export const clipboard = async (content: string) => {
  try {
    const clipboardItem = new ClipboardItem({
      [MIMETYPE]: new Blob([content], { type: MIMETYPE }),
    });

    setTimeout(async () => {
      await navigator.clipboard.write([clipboardItem]);
    }, 200);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    await navigator.clipboard.writeText(content);
  }
};

export const pascalToTitle = (str: string): string => {
  return str
    .replace(/([A-Z])/g, " $1")
    .trim()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const titleToPascal = (str: string): string => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toLowerCase() + word.slice(1))
    .join("");
};
