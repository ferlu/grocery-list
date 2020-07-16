import React, { Component } from 'react';
import items from '../items.json';
import CreatableSelect from 'react-select/creatable';
import moment from 'moment';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';

export default class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			item: [],
		};
	}
	handleNewItem(item) {
		if (!!this.state.item.find((element) => element.value === item.value)) {
			let indexOfElement = this.state.item.findIndex(
				(element) => element.value === item.value
			);
			let qty = this.state.item[indexOfElement].qty;
			let updateElement = [
				...this.state.item.slice(0, indexOfElement),
				{ ...this.state.item[indexOfElement], qty: qty + 1 },
				...this.state.item.slice(indexOfElement + 1, this.state.item.length),
			];
			this.setState({ item: updateElement });
		} else {
			let newElement = this.state.item.concat(item);
			this.setState({ item: newElement }, () => {
				console.log(this.state);
			});
		}
	}

	render() {
		return (
			<div className="h-100 bg-light">
				<div className="bg-light-pink">
					<div className="row p-3 m-0 text-primary text-shadow-white">
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
							<h4 className="m-0">Start here</h4> <br></br>
							<p>
								Type in the search box the item you want to add to your
								list.
							</p>
							<CreatableSelect
								isClearable
								options={items.map((item) => ({
									value: item.id,
									label: item.name,
									qty: 1,
								}))}
								onChange={(item) => this.handleNewItem(item)}
							/>
						</div>
					</div>
				</div>
				<div className="container p-4">
					<div className="row">
						<div className="col">
							<ListGroup>
								{this.state.item.map((item, index) => (
									<ListGroup.Item key={index} className="d-flex">
										<span className="text-left">{item.label}</span>
										<span className="badge badge-primary text-light align-self-center mr-0 ml-auto">
											{item.qty}
										</span>
									</ListGroup.Item>
								))}
							</ListGroup>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
