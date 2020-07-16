import React from 'react';

import uniqid from 'uniqid';
import './filter-list.styles.scss';

const FilterList = ({ languages, tools, handleAddFilter }) => {
	return (
		<div className="filter-container">
			<div className="language-filter-container">
				{languages.map((lingo) => {
					return (
						<button
							key={uniqid('2')}
							className="filter"
							onClick={handleAddFilter}
						>
							{lingo}
						</button>
					);
				})}
			</div>
			<div className="tool-filter-container">
				{tools.map((tool) => {
					return (
						<button
							key={uniqid.time()}
							className="filter"
							onClick={handleAddFilter}
						>
							{tool}
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default FilterList;