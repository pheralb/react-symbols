import type { Theme } from "./themeProvider";

import { createCookieSessionStorage } from "react-router";
import { isTheme } from "./themeProvider";

const sessionSecret = process.env.SESSION_SECRET ?? "DEFAULT_SECRET";

const themeStorage = createCookieSessionStorage({
  cookie: {
    name: "react-symbols-theme",
    secure: true,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
  },
});

async function getThemeSession(request: Request) {
  const session = await themeStorage.getSession(request.headers.get("Cookie"));
  return {
    getTheme: () => {
      const themeValue = session.get("theme");
      return isTheme(themeValue) ? themeValue : null;
    },
    setTheme: (theme: Theme) => session.set("theme", theme),
    commit: () => themeStorage.commitSession(session),
  };
}

export { getThemeSession };
