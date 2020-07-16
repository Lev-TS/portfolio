import React from 'react';

import './selected-filter.styles.scss';

const SelectedFilter = ({ filter, handleRemoveFilter }) => {
	return (
		<div className="selected-filter">
			<p>{filter}</p>
			<button onClick={handleRemoveFilter} value={filter}>
				<div className="close"></div>
			</button>
		</div>
	);
};

export default SelectedFilter;