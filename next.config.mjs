import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const hostnames = ['cms.minimalenglish.edu.vn', 'spaniel-flowing-sunbeam.ngrok-free.app', 'dungtq.site', 'i.pravatar.cc', 'images.unsplash.com', 'github.com', 'th.bing.com'];

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    mdxRs: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: hostnames.map(hostname => ({
      protocol: 'https',
      hostname,
      pathname: '**',
    })),
  },
};

export default withNextIntl(nextConfig)
