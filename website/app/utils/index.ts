import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function lower(input: string): string {
  return input
    .split(/[^a-zA-Z0-9]+/)
    .map((word, index) => {
      if (index === 0) {
        return word.charAt(0).toLowerCase() + word.slice(1);
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    })
    .join("");
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
