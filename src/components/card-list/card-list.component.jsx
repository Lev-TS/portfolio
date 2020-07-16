import React from 'react';
import Card from '../card/card.component';

import './card-list.styles.scss';

const CardList = ({ projects,  handleAddFilter}) => {
	return (
		<div className="card-list">
			{projects.map((project) => (
				<Card
					key={project.id}
					project={project}
					handleAddFilter={ handleAddFilter }
				/>
			))}
		</div>
	);
};

export default CardList;