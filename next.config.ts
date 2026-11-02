import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  typedRoutes: true,
  agentRules: false,

  /**
   * The five pages that used to live under pakezdrite.com/nalvi and were
   * retired before the move (PERS-25), and the old /nalvi/<page> shape, which
   * a link or a QR code printed before the move may still carry.
   */
  async redirects() {
    const retired: Array<[string, string]> = [
      ['services', '/'],
      ['personal-projects', '/about'],
      ['non-profits', '/about#work'],
      ['publications', '/about#publications'],
      ['writing', '/about#writing'],
    ];
    const pages =
      'about|card|project-management|computational-biology|ventures|opengraph-image';
    return [
      ...retired.map(([from, to]) => ({
        source: `/nalvi/${from}`,
        destination: to,
        permanent: true,
      })),
      { source: '/nalvi', destination: '/', permanent: true },
      {
        source: `/nalvi/:page(${pages})`,
        destination: '/:page',
        permanent: true,
      },
      { source: '/nalvi/:path*', destination: '/:path*', permanent: true },
    ];
  },
};

export default nextConfig;
