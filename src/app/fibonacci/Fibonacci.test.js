import React from 'react';
import FibonacciComponent from './FibonacciComponent';
import { shallow } from 'enzyme';

describe('<FibonacciComponent', () => {
	const handleNewRequest_spy = jasmine.createSpy('onClickFunction');
	it('renders without crashing', () => {
		shallow(<FibonacciComponent	digits={0} list={[]} handleNewRequest={handleNewRequest_spy}	/>);
	}),
	it('initially renders with empty fibonacci-list div', () => {
		const wrapper = shallow(<FibonacciComponent	digits={0} list={[]}	handleNewRequest={handleNewRequest_spy}	/>);
		const list = wrapper.find('#fibonacci-list'); 
		expect(list).toHaveLength(1); // list exists
		expect(list.containsMatchingElement(<span>0</span>)).toBe(false);
		expect(list.find('span').length).toEqual(0); // no <span> elements are rendered
	}),
	it('will render a <span> element for each number in props.list', () => {
		const wrapper = shallow(<FibonacciComponent	digits={4} list={[1,2,3,4]}	handleNewRequest={handleNewRequest_spy}	/>);
		const list = wrapper.find('#fibonacci-list');
		expect(list.find('span').length).toEqual(4); // 
	})
})
