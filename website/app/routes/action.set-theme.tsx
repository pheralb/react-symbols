import type { ActionFunctionArgs } from "@vercel/remix";
import { redirect } from "@vercel/remix";

import { isTheme } from "@/theme/themeProvider";
import { getThemeSession } from "@/theme/themeServer";

export const action = async ({ request }: ActionFunctionArgs) => {
  const themeSession = await getThemeSession(request);
  const requestText = await request.text();
  const form = new URLSearchParams(requestText);
  const theme = form.get("theme");

  if (!isTheme(theme)) {
    return {
      success: false,
      message: `theme value of ${theme} is not a valid theme`,
    };
  }

  themeSession.setTheme(theme);
  return {
    success: true,
    headers: { "Set-Cookie": await themeSession.commit() },
  };
};

export const loader = async () => redirect("/", { status: 404 });
