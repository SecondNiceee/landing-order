/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  typescript: {
    ignoreBuildErrors: true,
  },

  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'class-variance-authority',
      'clsx',
      'tailwind-merge'
    ],
  },

  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Убираем nodemailer из клиента (если используется только на сервере)
      config.externals = {
        ...config.externals,
        'nodemailer': 'nodemailer',
      };

      // Сохраняем код-сплиттинг для dynamic-секций
      config.optimization = {
        ...config.optimization,
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 10,
            },
            default: {
              minChunks: 2,
              priority: -10,
              reuseExistingChunk: true,
            },
          },
        },
        minimize: true,
        concatenateModules: true,
      };
    }
    return config;
  },
  
  compress: true,
  poweredByHeader: false,
  generateEtags: false,

  reactStrictMode: true,

  images: {
    unoptimized: true,
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  trailingSlash: true,
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
