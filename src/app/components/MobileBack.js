'use client';

import { useRouter } from 'next/navigation';

export default function MobileBack() {
	const router = useRouter();

	const handleBack = () => {
		router.back();
	};

	return (
		<button
			className='mobile-back-btn'
			onClick={handleBack}
			aria-label='Go back'
		>
			←
		</button>
	);
}
