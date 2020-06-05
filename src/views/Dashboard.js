import React, { Component } from 'react';
import moment from 'moment';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import items from '../items.json';
import Select from 'react-select';

export default class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		console.log('constructor');
	}

	componentDidMount() {
		console.log('componentDidMount');
	}

	componentDidUpdate() {
		console.log('componentDidUpdate');
	}

	render() {
		console.log('render');

		return (
			<div className="h-100 bg-light-pink">
				<div className="bg-white">
					<div className="row p-3">
						<div className="col-auto col-md">
							<span className="font-weight-bold">
								Minimal Shopping List
							</span>
						</div>
						<small className="col text-right font-weight-bold">
							{moment().format('L')}
						</small>
					</div>
				</div>
				<div className="container p-4">
					<div className="row text-center">
						<div className="col">
							<h4 className="m-0">Start here.</h4> <br></br> Type in the
							search box the item you want to add to your list.
							<Select
								options={items.map((item) => ({
									value: item.id,
									label: item.name,
								}))}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
