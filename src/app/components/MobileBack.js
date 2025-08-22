'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function MobileBack({ className = '' }) {
	const router = useRouter();
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (typeof window === 'undefined') return;
		const mq = window.matchMedia('(max-width: 640px)');
		const onChange = (e) => setIsMobile(e.matches);
		setIsMobile(mq.matches);
		mq.addEventListener('change', onChange);
		return () => mq.removeEventListener('change', onChange);
	}, []);

	if (!isMobile) return null;

	return (
		<button
			type='button'
			className={`back-button ${className}`}
			onClick={() => router.back()}
			aria-label='Go back'
		>
			←
		</button>
	);
}
