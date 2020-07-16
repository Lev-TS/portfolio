import React from 'react';

import './portfolio.styles.scss';
import PORTFOLIO_DATA from './portfolio.data';

import SelectedFilterList from '../../components/selected-filter-list/selected-filter-list.component';
import CardList from '../../components/card-list/card-list.component';

class Portfolio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: PORTFOLIO_DATA,
			filters: []
		};
	}

	handleAddFilter = (event) => {
		event.persist();
		this.setState((prevState) => {
			const value = event.target.textContent;
			let { filters } = prevState;
			if (!filters.includes(value)) {
				filters = filters.concat(value);
			}
			return { filters, lastFilter: value };
		});
	};

	handleRemoveFilter = (event) => {
		event.persist();
		this.setState((prevState) => {
			const filters = prevState.filters.filter(
				(element, index) => event.target.value !== element
			);
			return { filters };
		});
		this.setState({ test: event.target.value });
	};

	handleClear = (event) => {
		this.setState({ filters: [], remainingFilters: [] });
	};

	render() {
		let { projects, filters } = this.state;

		const filterProjects = () => {
			filters.forEach(filter=>{
				projects.forEach(listing => {
					if (filter === listing.stack) {
						projects = projects.filter(item => item.stack === filter)
					} else if (filter === listing.type) {
						projects = projects.filter(item => item.type === filter)
					} else if (listing.languages.includes(filter)) {
						projects = projects.filter(item => item.languages.includes(filter))
					} else if (listing.tools.includes(filter)) {
						projects = projects.filter(item => item.tools.includes(filter))
					}
				})
			});
			return projects;
		}

		return (
			<div className="portfolio">
				<SelectedFilterList
					filters={filters}
					handleRemoveFilter={this.handleRemoveFilter}
					handleClear={this.handleClear}
				/>
				<CardList
					projects={filterProjects()}
					handleAddFilter={this.handleAddFilter}
				/>
			</div>
		);
	}
}

export default Portfolio;