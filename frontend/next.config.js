/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  trailingSlash: true,
  distDir: process.env.NODE_ENV === 'production' ? '../apps' : undefined,
  images: {
    domains: [],
  },
  experimental: {
    typedRoutes: true,
  },

  reactStrictMode: true,

  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };

    return config;
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        dns: false,
        child_process: false,
        tls: false,
        path: false,
        stream: false,
        event: false,
      };
    }

    return config;
  },
};

module.exports = nextConfig;
