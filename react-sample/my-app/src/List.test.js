import React from 'react';

import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import List from './List';
Enzyme.configure({ adapter: new Adapter() })
test('List component should render as expected', ()=>{
	const component = shallow(<List/>);
	expect(component.find('p').text()).toBe('Sample List ');
});