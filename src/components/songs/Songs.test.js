import React from 'react';
import { shallow } from 'enzyme';
import Songs from './Songs';

describe('Songs renders', () => {
  it('renders Songs', () => {
    const wrapper = shallow(<Songs artist={'lady'} songs={[{ date: 'yes', id: 'no' }]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
