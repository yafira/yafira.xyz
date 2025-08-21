// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

export default nextConfig;
