/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: 'vercel',
  server: process.env.NODE_ENV === 'development' ? undefined : './server.js',
  ignoredRouteFiles: ['**/.*'],
  appDirectory: 'src',
  mdx: async () => {
    const [rehypeHighlight] = await Promise.all([
      import('rehype-highlight').then((mod) => mod.default)
    ]);
    return {
      rehypePlugins: [rehypeHighlight],
      remarkPlugins: []
    };
  }
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "api/index.js",
  // publicPath: "/build/",
};
