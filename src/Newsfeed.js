import React from 'react';
import './Newsfeed.css';
import LineGraph from './LineGraph';
import TimeLine from './TimeLine';

function Newsfeed() {
	return (
		<div className="newsfeed">
			<div className="newsfeed__container">
				<div className="newsfeed__chartSection">
					<div className="newsfeed__portfolio">
						<h1>$420,000</h1>
						<p>+69.00 (+4.20%) Today</p>
					</div>
					<div className="newsfeed__chart">
						<LineGraph />
						<TimeLine />
					</div>
				</div>
				<div className="newsfeed__buying__section">
					<h2>Buying Power</h2>
					<h2>$4.24</h2>
				</div>
				<div className="newsfeed__market__section">
					<div className="newsfeed__market__box">
						<p>Markets Closed</p>
						<h1>Happy Thanksgiving</h1>
					</div>
				</div>
				<div className="newsfeed__popularlists__section">suh dude</div>
			</div>
		</div>
	);
}

export default Newsfeed;
