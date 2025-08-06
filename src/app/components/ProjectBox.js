/* eslint-disable @next/next/no-img-element */
const ProjectBox = ({
	title,
	imageUrl,
	link,
	description,
	links,
	category,
	showLinksAlways = false,
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
						<span className='box-text'>{title}</span>
						<img
							src={imageUrl}
							alt={title}
							className='project-image'
							style={{ background: 'transparent' }}
						/>
					</div>
					<div
						className={`project-links design-links ${
							showLinksAlways ? 'always-visible' : ''
						}`}
					>
						{links &&
							Object.entries(links).map(([key, url]) => (
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
					className='box-content'
					style={{ textDecoration: 'none', background: 'transparent' }}
				>
					<span className='box-text'>{title}</span>
					<img
						src={imageUrl}
						alt={title}
						className='project-image'
						style={{ background: 'transparent' }}
					/>
				</a>
			)}
		</div>
	);
};

export default ProjectBox;
