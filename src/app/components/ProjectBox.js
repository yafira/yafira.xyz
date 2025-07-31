/* eslint-disable @next/next/no-img-element */
const ProjectBox = ({ title, imageUrl, link, description, links }) => (
	<div className='project-box line-box'>
		<div className='box-content'>
			<img src={imageUrl} alt={title} className='project-image' />
			<span className='box-text'>{title}</span>
		</div>
		<div className='project-links'>
			{links
				? Object.entries(links).map(([key, url]) => (
						<a
							key={key}
							href={url}
							target='_blank'
							rel='noopener noreferrer'
							className='project-link button-link'
						>
							{key.charAt(0).toUpperCase() + key.slice(1)}
						</a>
				  ))
				: link && (
						<a
							href={link}
							target='_blank'
							rel='noopener noreferrer'
							className='project-link button-link'
						>
							View Project
						</a>
				  )}
		</div>
	</div>
);

export default ProjectBox;
