import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import * as changeCase from "change-case";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const camelCase = (str: string) => {
  if ((str.match(/[A-Z]/g) || []).length >= 2) {
    return changeCase.camelCase(str);
  }
  if (str.includes("-")) {
    return changeCase.camelCase(str);
  }
  return changeCase.camelCase(str);
};

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
