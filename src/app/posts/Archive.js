'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
});

export default function Archive() {
	const router = useRouter();

	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [err, setErr] = useState(null);

	const [q, setQ] = useState('');
	const [filters, setFilters] = useState({ electrocute: true, itp: true });
	const [view, setView] = useState('list'); // 'list' | 'cards'

	// mobile detection for conditional UI (back button + hide toggle)
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		if (typeof window === 'undefined') return;
		const mq = window.matchMedia('(max-width: 640px)');
		const onChange = (e) => setIsMobile(e.matches);
		setIsMobile(mq.matches);
		mq.addEventListener('change', onChange);
		return () => mq.removeEventListener('change', onChange);
	}, []);

	// remember last view choice (desktop/tablet)
	useEffect(() => {
		const saved =
			typeof window !== 'undefined' && localStorage.getItem('postsView');
		if (saved === 'cards' || saved === 'list') setView(saved);
	}, []);
	useEffect(() => {
		if (typeof window !== 'undefined') localStorage.setItem('postsView', view);
	}, [view]);

	// fetch all posts
	useEffect(() => {
		(async () => {
			try {
				setLoading(true);
				const res = await fetch('/api/blog/all');
				if (!res.ok) throw new Error(`api ${res.status}`);
				const data = await res.json();
				const decode = (s = '') => {
					const el = document.createElement('textarea');
					el.innerHTML = s;
					return el.value;
				};
				setPosts(data.map((p) => ({ ...p, title: decode(p.title) })));
			} catch (e) {
				setErr(e.message || String(e));
			} finally {
				setLoading(false);
			}
		})();
	}, []);

	const filtered = useMemo(() => {
		const qlc = q.trim().toLowerCase();
		return posts
			.filter((p) => filters[p.siteLabel])
			.filter((p) => (qlc ? (p.title || '').toLowerCase().includes(qlc) : true))
			.sort((a, b) => new Date(b.date) - new Date(a.date));
	}, [posts, q, filters]);

	const toggle = (key) => setFilters((f) => ({ ...f, [key]: !f[key] }));

	// hover glow helpers (desktop only)
	const followGlow = (e) => {
		const r = e.currentTarget.getBoundingClientRect();
		const x = e.clientX - r.left;
		const y = e.clientY - r.top;
		e.currentTarget.style.setProperty('--mx', x + 'px');
		e.currentTarget.style.setProperty('--my', y + 'px');
	};
	const resetGlow = (e) => {
		const el = e.currentTarget;
		el.style.setProperty('--mx', el.offsetWidth / 2 + 'px');
		el.style.setProperty('--my', el.offsetHeight / 2 + 'px');
	};

	return (
		<div className={`archive ${spaceGrotesk.className}`}>
			<header className='archive-header'>
				{/* back button shows only on phones */}
				{isMobile && (
					<button
						className='back-button'
						onClick={() => router.back()}
						aria-label='Go back'
						type='button'
					>
						← back
					</button>
				)}

				<h1>all posts</h1>

				<div className='archive-controls'>
					<label className='chip'>
						<input
							type='checkbox'
							checked={filters.electrocute}
							onChange={() => toggle('electrocute')}
						/>
						<span className='chip-pill electrocute'>electrocute</span>
					</label>
					<label className='chip'>
						<input
							type='checkbox'
							checked={filters.itp}
							onChange={() => toggle('itp')}
						/>
						<span className='chip-pill itp'>itp</span>
					</label>

					<input
						className='archive-search'
						type='search'
						placeholder='search titles…'
						value={q}
						onChange={(e) => setQ(e.target.value)}
					/>

					{/* view toggle hidden on mobile */}
					{!isMobile && (
						<div className='view-toggle' role='tablist' aria-label='layout'>
							<button
								className={`view-btn ${view === 'list' ? 'is-active' : ''}`}
								onClick={() => setView('list')}
								aria-pressed={view === 'list'}
							>
								list
							</button>
							<button
								className={`view-btn ${view === 'cards' ? 'is-active' : ''}`}
								onClick={() => setView('cards')}
								aria-pressed={view === 'cards'}
							>
								cards
							</button>
						</div>
					)}
				</div>
			</header>

			{loading && <p className='archive-status'>loading…</p>}
			{err && <p className='archive-status error'>error: {err}</p>}
			{!loading && !err && filtered.length === 0 && (
				<p className='archive-status'>no posts found.</p>
			)}

			{!isMobile && view === 'cards' ? (
				<div className='archive-grid masonry'>
					{filtered.map((p) => (
						<a
							key={`${p.siteLabel}-${p.id}`}
							className='archive-card'
							href={p.link}
							target='_blank'
							rel='noopener noreferrer'
							data-site={p.siteLabel}
							title={p.title}
						>
							<span className='archive-title'>{p.title}</span>
						</a>
					))}
				</div>
			) : (
				<ul className='archive-list'>
					{filtered.map((p) => (
						<li
							key={`${p.siteLabel}-${p.id}`}
							className='archive-row'
							data-site={p.siteLabel}
						>
							<a
								className='row-link'
								href={p.link}
								target='_blank'
								rel='noopener noreferrer'
								onMouseEnter={resetGlow}
								onMouseMove={followGlow}
								onMouseLeave={resetGlow}
								title={p.title}
							>
								<span className='row-title'>{p.title}</span>
								<span className='row-meta'>
									<time
										className='row-date'
										dateTime={p.date}
										suppressHydrationWarning
									>
										{new Date(p.date).toLocaleDateString('en-US', {
											year: 'numeric',
											month: 'short',
											day: '2-digit',
											timeZone: 'EST', // keeps it deterministic
										})}
									</time>
								</span>
							</a>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
