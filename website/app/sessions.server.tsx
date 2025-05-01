import { createCookieSessionStorage } from "react-router";
import { createThemeSessionResolver } from "remix-themes";
import { appConfig } from "@/config";

const isProduction = process.env.NODE_ENV === "production";

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "theme",
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secrets: ["s3cr3t"],
    ...(isProduction ? { domain: appConfig.prodUrl, secure: true } : {}),
  },
});

export const themeSessionResolver = createThemeSessionResolver(sessionStorage);
