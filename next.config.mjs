// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	images: {
		// Serve modern formats when the browser supports them
		formats: ['image/avif', 'image/webp'],

		// Help Next pick smaller variants for your breakpoints
		deviceSizes: [360, 640, 768, 1024, 1280, 1536],
		imageSizes: [16, 24, 32, 48, 64, 96, 128, 256],

		// Cache optimized results longer (seconds)
		minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days

		// Allow your remote image hosts
		remotePatterns: [
			// your wp sites
			{ protocol: 'https', hostname: 'electrocuteblog.wordpress.com' },
			{ protocol: 'https', hostname: 'electrocuteitp.wordpress.com' },

			// wordpress CDN variants
			{ protocol: 'https', hostname: '*.wordpress.com' },
			{ protocol: 'https', hostname: '*.wp.com' },
			{ protocol: 'https', hostname: 'i0.wp.com' },
			{ protocol: 'https', hostname: 'i1.wp.com' },
			{ protocol: 'https', hostname: 'i2.wp.com' },

			// external sources you link to
			{ protocol: 'https', hostname: 'ml5js.org' },
			{ protocol: 'https', hostname: 'assets.ml5js.org' },
		],
	},

	async redirects() {
		return [
			{
				source: '/:path*',
				has: [{ type: 'host', value: 'www.yafira.dev' }],
				destination: 'https://yafira.dev/:path*',
				permanent: true,
			},
		];
	},
};

export default nextConfig;
