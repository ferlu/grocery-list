import React from 'react';
import Moment from 'moment';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Dashboard extends React.Component {
	render() {
		return (
			<div className="h-100 bg-light-pink">
				<div className="bg-white">
					<div className="row p-3">
						<div className="col-auto col-md">
							<span className="font-weight-bold">Minimal Grocery List</span>
						</div>
						<div className="col text-right">
							{/* <Moment>{moment()}</Moment> */}
						</div>
					</div>
				</div>
				<div className="container p-4">
					<div className="row text-center">
						<div className="col">
							Start here. Type in the search box the item you want to add to
							your list.
						</div>
					</div>
				</div>
			</div>
		);
	}
}
