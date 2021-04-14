import React from 'react';
import './Newsfeed.css';
import LineGraph from './LineGraph';
import TimeLine from './TimeLine';
import Chip2 from './Chip';
import { Chip, Avatar } from '@material-ui/core';

const popularTopics = [
	'Technology',
	'Top Movies',
	'Upcoming Earnings',
	'Crypto',
	'Cannabis',
	'Healthcare Supplies',
	'Index ETFs',
	'Technology',
	'China',
	'Pharma',
];

function Newsfeed() {
	return (
		<div className="newsfeed">
			<div className="newsfeed__container">
				<div className="newsfeed__chartSection">
					<div className="newsfeed__portfolio">
						<h1>$120,000</h1>
						<p>+79.00 (+4.30%) Today</p>
					</div>
					<div className="newsfeed__chart">
						<LineGraph />
						<TimeLine />
					</div>
				</div>
				<div className="newsfeed__buying__section__container">
					<div className="newsfeed__buying__section">
						<h2>Buying Power</h2>
						<h2>$4.24</h2>
					</div>
				</div>
				<div className="newsfeed__market__section">
					<div className="newsfeed__market__box">
						<p>Markets Closed</p>
						<h1>Happy Thanksgiving</h1>
					</div>
				</div>
				<div className="newsfeed__popularlists__section">
					<div className="newsfeed__popularlists__intro">
						<h1>Popular Lists</h1>
						<p>Show More</p>
					</div>
					<div className="newsfeed__popularlists__badges__custom">
						{popularTopics.map(topic => (
							<Chip2
								label={topic}
								image={`https://avatars.dicebear.com/api/jdenticon/${topic}.svg`}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Newsfeed;
