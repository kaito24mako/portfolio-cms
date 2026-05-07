/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["sequelize", "sqlite3"],
};

export default nextConfig;

// import {
//   PHASE_DEVELOPMENT_SERVER,
//   PHASE_PRODUCTION_BUILD,
// } from "next/constants.js";

// const nextConfig = (phase) => {
//   // Setting Phase
//   const isDev = phase === PHASE_DEVELOPMENT_SERVER;
//   const isProd = phase === PHASE_PRODUCTION_BUILD;
//   console.log(`isDev:${isDev}  isProd:${isProd}`);

//   // Compiler options here
//   const reactStrictMode = true;
//   const reactCompiler = true;

//   // UNCONFIGURED HOST + REMOTE PATTERNS: https://nextjs.org/docs/pages/api-reference/components/image#remotepatterns
//   const images = {
//     remotePatterns: [
//       {
//         protocol: "http",
//         hostname: "**.bbc.co.uk",
//       },
//       {
//         protocol: "https",
//         hostname: "**.bbci.co.uk",
//       },
//       {
//         protocol: "https",
//         hostname: "**.abc-cdn.net.au",
//       },
//       {
//         protocol: "https",
//         hostname: "**.**",
//       },
//       {
//         protocol: "https",
//         hostname: "**.**.**",
//       },
//     ],
//   };

//   const env = {
//     SERVER_NAME: (() => {
//       if (isDev) return "http://localhost:3000/";
//       if (isProd) return "https://YOUR-DOMAIN-HERE.vercel.app/";
//       return undefined;
//     })(),
//     NEWS_API_KEY: process.env.NEWS_API_KEY,
//   };

//   // Next.config returns an object
//   return {
//     reactStrictMode,
//     reactCompiler,
//     images,
//     env,
//   };
// };

// export default nextConfig;
