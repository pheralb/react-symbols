import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const lower = (str: string) =>
  str.charAt(0).toLowerCase() + str.slice(1);

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
