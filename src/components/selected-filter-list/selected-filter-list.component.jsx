import React from 'react';
import SelectedFilter from '../selected-filter/selected-filter.component';

import './selected-filter-list.styles.scss';
import uniqid from 'uniqid';

const SelectedFilterList = ({
	filters,
	handleRemoveFilter,
	handleClear,
}) => {
	return (
		<div className="selected-filter-list" style={{transform: `${filters.length === 0 ? 'scale(0)' : 'none'}`, position: `${filters.length === 0 ? 'absolute' : 'static'}`}}>
			<div className="selected-filter-container" >
				{filters.map((filter) => (
					<SelectedFilter
						key={uniqid('1')}
						filter={filter}
						handleRemoveFilter={handleRemoveFilter}
					/>
				))}
			</div>
			<button className="clear" onClick={handleClear}>
				Clear
			</button>
		</div>
	);
};

export default SelectedFilterList;