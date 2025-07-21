/* eslint-disable @next/next/no-img-element */
const ProjectBox = ({ title, imageUrl, link, description, links }) => (
	<div className='project-box line-box'>
		<div className='box-content'>
			<img src={imageUrl} alt={title} className='project-image' />
			<span className='box-text'>{title}</span>
		</div>
		{links ? (
			<div className='project-links'>
				{Object.entries(links).map(([key, url]) => (
					<a key={key} href={url} className={`project-link ${key}-btn`}>
						{key.charAt(0).toUpperCase() + key.slice(1)}
					</a>
				))}
			</div>
		) : (
			<a href={link} className='project-link'>
				View Project
			</a>
		)}
	</div>
)

export default ProjectBox
