import React, { Component } from 'react';
import Lottie from 'react-lottie';
import checkboxAnimation from '../lotties/checkbox';

const defaultOptions = {
	loop: false,
	autoplay: false,
	animationData: checkboxAnimation,
	rendererSettings: {},
};

export default class Element extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isStopped: true,
		};
		this.animationRef = null;
	}
	componentDidUpdate() {
		console.log(this.props);
		if (this.animationRef) {
			this.animationRef.anim.stop(10, true);
		}
	}
	editItem() {
		console.log('edit/delete');
	}

	handleQtyChange() {
		console.log('change qty');
	}

	render() {
		return (
			<div className="div my-3">
				<div className="row">
					<div className="col-7 col-sm-10 pointer" onClick={this.editItem}>
						<div className="d-flex">
							<button
								className="btn link position-absolute"
								onClick={() =>
									this.setState({ isStopped: !this.state.isStopped })
								}>
								<div className="lottie-checkbox position-absolute">
									<Lottie
										isStopped={this.state.isStopped}
										options={defaultOptions}
										height={110}
										width={110}
									/>
								</div>
							</button>
							<span className="text-left ml-4 pl-1">
								{this.props.item.label}
							</span>
						</div>
					</div>
					<div className="col-3 col-sm-2 border-left ">
						<div className="pl-2">
							{/* <button
								className="btn btn-primary badge text-light link"
								onClick={() =>
									this.decreaseQty(this.props.item.value, this.props.item.qty)
								}>
								-
							</button>
							<button className="btn btn-primary badge text-light mx-1">
								{this.props.item.qty}
							</button>
							<button
								className="btn btn-primary badge text-light"
								onClick={() =>
									this.increaseQty(this.props.item.value, this.props.item.qty)
								}>
								+
							</button> */}
							<input
								name="qty"
								type="number"
								className="w-100 border-0 text-center text-primary"
								value={this.props.item.qty}
								min="0"
								max="100"
								onChange={this.handleQtyChange}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
