import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FibonacciComponent extends Component {
	constructor(props) {
		super(props);
		this.state = { value: '' };
	}

	handleChange = event => {
		this.setState({ value: event.target.value });
	}

	handleSubmit = values => {
		this.setState({ value: '' });
		this.props.handleNewRequest(values);
	}
	
	renderFibonacciList = list => {
		if (list.length === 0) return null;
		const renderedList = list.map((num, i) => (
			<span className='fibonacci-number' key={i}>
				{num}
			</span>
		));
		return (
			<div>
				<h2>Fibonacci generated to {list.length} digits</h2>
				<div className='fibonacci-list' >
					{renderedList}
				</div>
			</div>
		)
	}

	render() {
		if (this.props.isLoading) return (<h2>Loading . . .</h2>);
		return (
			<div>
				<form onSubmit={values => this.handleSubmit(values)} className='fibonacci-main'>
					<label htmlFor='fibonacci-digits'>Number of Digits</label>
					<input 
						type='number' 
						placeholder='digits' 
						id='fibonacci-digits'
						value={this.state.value}
						onChange={this.handleChange}
						min='1'
						required
					/>
					<input type='submit' value='GENERATE' />
				</form>
				<div id='fibonacci-list'>
					{this.renderFibonacciList(this.props.list)}
				</div>
			</div>
		);
	}
}

FibonacciComponent.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	list: PropTypes.arrayOf(PropTypes.number).isRequired,
	handleNewRequest: PropTypes.func.isRequired
};

export default FibonacciComponent;