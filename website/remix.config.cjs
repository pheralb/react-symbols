/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  server: process.env.NODE_ENV === "development" ? undefined : "./server.ts",
  serverBuildPath: "api/index.js",
  appDirectory: "src",
  tailwind: true,
  serverDependenciesToBundle: ["@react-symbols/icons"],
}
