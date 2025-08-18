'use client';

import '@/app/styles/globals.css';
import { allProjects } from '@/app/lib/projectData';
import ProjectBox from '@/app/components/ProjectBox';

export default function ProjectsPage() {
	return (
		<div className='main-content'>
			<h1>all projects</h1>
			<div className='projects-grid'>
				{allProjects.map((project, i) => (
					<ProjectBox key={i} {...project} category={project.category} />
				))}
			</div>
		</div>
	);
}
