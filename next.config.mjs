import {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} from "next/constants.js";

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  // Environment phase checks
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  console.log(`isDev:${isDev}  isProd:${isProd}`);

  return {
    // Required for Sequelize + SQLite in Next.js
    serverExternalPackages: ["sequelize", "sqlite3"],

    // Remote image domains
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "**.bbc.co.uk",
        },
        {
          protocol: "https",
          hostname: "**.bbci.co.uk",
        },
        {
          protocol: "https",
          hostname: "**.abc-cdn.net.au",
        },
        {
          protocol: "https",
          hostname: "**.**",
        },
        {
          protocol: "https",
          hostname: "**.**.**",
        },
      ],
    },

    // Environment variables exposed to browser + server
    env: {
      SERVER_NAME: (() => {
        if (isDev) return "http://localhost:3000";
        if (isProd)
          return "codefeed-deploy-oia2-68zcd9ifv-kaito24makos-projects.vercel.app";
        return undefined;
      })(),

      NEWS_API_KEY: process.env.NEWS_API_KEY,
    },
  };
};

export default nextConfig;
