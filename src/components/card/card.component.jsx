import React from 'react';

import FilterList from '../filter-list/filter-list.component';

import './card.styles.scss';

const Card = ({ project, handleAddFilter }) => (
	<div className="project-card">
		<div className="project-image-container">
			<div
				className="project-image"
				style={{
					backgroundImage: `url(${process.env.PUBLIC_URL}${project.image})`,
				}}
			/>
		</div>
		<div className="project-info-container">
			<FilterList
				languages={project.languages}
				tools={project.tools}
				handleAddFilter={handleAddFilter}
			/>
			<h2 className="project-title">{project.title}</h2>
			<ul className="info-list-container">
				<li>{project.projectType}</li>
				<li className="bullet"></li>
				<li>{project.stackType}</li>
				<li className="bullet"></li>
				<li>{project.postedAt}</li>
			</ul>
			<p className="project-description">{project.description}</p>

			<div className="card-button-container">
				<a
					href={project.liveUrl}
					rel="noopener noreferrer"
					target="_blank"
					style = {{display: `${project.liveUrl === 'n/a' ? 'none' : 'inline-block'}`}}
				>
					Live
				</a>
				<a
					href={project.sourceUrl}
					rel="noopener noreferrer"
					target="_blank"
					style = {{display: `inline-block`}}
				>
					Source
				</a>
			</div>
		</div>
	</div>
);

export default Card;
