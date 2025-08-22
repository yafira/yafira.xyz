// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{ protocol: 'https', hostname: '*.wordpress.com' },
			{ protocol: 'https', hostname: '*.wp.com' },
			{ protocol: 'https', hostname: 'i0.wp.com' },
			{ protocol: 'https', hostname: 'i1.wp.com' },
			{ protocol: 'https', hostname: 'i2.wp.com' },
			{ protocol: 'https', hostname: 'electrocuteblog.wordpress.com' },
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
