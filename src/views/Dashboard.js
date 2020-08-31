import React, { Component } from 'react';
import itemsList from '../items.json';
import CreatableSelect from 'react-select/creatable';
import moment from 'moment';
import Element from './Element';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
export default class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
		};
	}

	handleNewItem(item) {
		if (item) {
			if (!!this.state.items.find((element) => element.value === item.value)) {
				let indexOfElement = this.state.items.findIndex(
					(element) => element.value === item.value
				);
				let qty = this.state.items[indexOfElement].qty;
				let updateElement = [
					...this.state.items.slice(0, indexOfElement),
					{ ...this.state.items[indexOfElement], qty: qty + 1 },
					...this.state.items.slice(
						indexOfElement + 1,
						this.state.items.length
					),
				];
				this.setState({ items: updateElement });
			} else {
				if (!item.qty) item.qty = 1;
				let newElement = this.state.items.concat(item);
				this.setState({ items: newElement });
			}
		}
	}

	render() {
		return (
			<div className="h-100 bg-light">
				<div className="bg-light-pink">
					<div className="row p-3 m-0 text-primary text-shadow-white">
						<div className="col-auto col-md">
							<span className="font-weight-bold">Minimal Shopping List</span>
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
								Type in the search box the item you want to add to your list.
							</p>
							<CreatableSelect
								isClearable
								theme={(theme) => ({
									...theme,
									borderRadius: 0,
									colors: {
										...theme.colors,
										primary25: '#f9dedd',
										primary: '#de8d8b',
										primary50: '#fbcecd',
									},
								})}
								options={itemsList.map((item) => ({
									value: item.id,
									label: item.name,
									qty: 1,
								}))}
								onChange={(item) => this.handleNewItem(item)}
							/>
						</div>
					</div>
				</div>
				{!!this.state.items.length && (
					<div className="container p-4">
						<div className="row text-center mx-auto">
							<div className="col border bg-white">
								{this.state.items.map((item, index) => (
									<Element key={index} className="d-flex" item={item} />
								))}
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}
