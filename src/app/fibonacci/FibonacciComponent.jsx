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
	
	render() {
		return (
			<div>
				<form onSubmit={values => this.props.handleNewRequest(values)} className='fibonacci-main'>
					<label for='fibonacci-digits'>Number of Digits</label>
					<input 
						type='number' 
						placeholder='42' 
						id='fibonacci-digits'
						value={this.state.value}
						onChange={this.handleChange}
					/>
					<input type='submit' value='Generate' />
				</form>
			</div>
		);
	}
}

FibonacciComponent.propTypes = {
	digits: PropTypes.number.isRequired,
	list: PropTypes.arrayOf(PropTypes.number).isRequired,
	handleNewRequest: PropTypes.func.isRequired
};

export default FibonacciComponent;