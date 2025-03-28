/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      crypto: false,
      stream: false,
      path: false,
      os: false,
      http: false,
      https: false,
      zlib: false,
      child_process: false,
      module: false,
    };
    
    // Ignore problematic modules
    config.externals = [
      ...config.externals || [],
      'bcrypt',
      'node-gyp',
      'npm',
      '@mapbox/node-pre-gyp',
    ];
    
    return config;
  }
};

module.exports = nextConfig;
