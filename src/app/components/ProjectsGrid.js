'use client';
import ProjectBox from '@/app/components/ProjectBox';

export default function ProjectsGrid({ projects }) {
	return (
		<div className='projects-grid'>
			{projects.map((project, i) => (
				<ProjectBox key={i} {...project} category={project.category} />
			))}
		</div>
	);
}
