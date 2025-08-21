/* eslint-disable @next/next/no-img-element */
const ProjectBox = ({
	title,
	imageUrl,
	link,
	description,
	links,
	category,
	showLinksAlways = false,
	badge, // 'itp' | 'electrocute'
}) => {
	const isDesign =
		category === 'design' || (links && Object.keys(links).length > 0);

	return (
		<div
			className={`project-box line-box ${isDesign ? 'design-project' : ''}`}
			data-category={category}
		>
			{isDesign ? (
				<>
					<div className='box-content'>
						{badge && <span className={`project-badge ${badge}`}>{badge}</span>}
						<span className='box-text'>{title}</span>
						{/* design keeps images */}
						<img
							src={imageUrl}
							alt={title}
							className='project-image'
							style={{ background: 'transparent' }}
						/>
					</div>

					{(description || links?.description) && (
						<p className='project-description'>
							{description || links.description}
						</p>
					)}

					<div
						className={`project-links design-links ${
							showLinksAlways ? 'always-visible' : ''
						}`}
					>
						{links &&
							Object.entries(links)
								.filter(([key]) => key !== 'description')
								.map(([key, url]) => (
									<a
										key={key}
										href={url}
										target='_blank'
										rel='noopener noreferrer'
										className='project-link button-link'
									>
										{key.toUpperCase()}
									</a>
								))}
					</div>
				</>
			) : (
				<a
					href={link}
					target='_blank'
					rel='noopener noreferrer'
					className={`box-content ${category === 'text' ? 'text-only' : ''}`}
					style={{ textDecoration: 'none', background: 'transparent' }}
				>
					{badge && <span className={`project-badge ${badge}`}>{badge}</span>}

					<span className='box-text'>{title}</span>

					{/* hide image for blog posts (text) */}
					{category !== 'text' && imageUrl && (
						<img
							src={imageUrl}
							alt={title}
							className='project-image'
							style={{ background: 'transparent' }}
						/>
					)}

					{/* we already hid description for text earlier */}
					{category !== 'text' && description && (
						<p className='project-description'>{description}</p>
					)}
				</a>
			)}
		</div>
	);
};

export default ProjectBox;
