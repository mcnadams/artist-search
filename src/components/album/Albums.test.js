import React from 'react';
import { shallow } from 'enzyme';
import Albums from './Albums';

describe('Albums renders', () => {
  it('renders Albums', () => {
    const wrapper = shallow(<Albums artist={'lady'} albums={[{ date: 'yes', id: 'no' }]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
