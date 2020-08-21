import React, { Component } from 'react';

export default class Element extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidUpdate() {
		console.log(this.props);
	}
	editItemName() {
		console.log('edit name');
	}
	decreaseQty(id, qty) {
		console.log(id, qty);
	}
	increaseQty(id, qty) {
		console.log(id, qty);
	}

	render() {
		return (
			<div className="div my-2">
				<div className="row">
					<div className="col-7 col-sm-10">
						<div className="d-flex border bg-white p-3">
							<span className="text-left">{this.props.item.label}</span>
							<button
								className="btn link d-flex p-0 ml-auto mr-0"
								onClick={this.editItemName}>
								<span role="img" aria-label="write">
									✏️
								</span>
							</button>
						</div>
					</div>
					<div className="col-3 col-sm-2">
						<div className="border bg-white py-3 px-1 text-center text-light">
							<button
								className="btn btn-outline-dark badge"
								onClick={() =>
									this.decreaseQty(this.props.item.value, this.props.item.qty)
								}>
								-
							</button>
							<button className="btn btn-primary badge text-light mx-1">
								{this.props.item.qty}
							</button>
							<button
								className="btn btn-outline-dark badge"
								onClick={() =>
									this.increaseQty(this.props.item.value, this.props.item.qty)
								}>
								+
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
