import React from 'react';
import { shallow } from 'enzyme';
import Artist from './Artist';

describe('Artist renders', () => {
  it('renders Artist', () => {
    const wrapper = shallow(<Artist artist={{ name: 'lady', id: '5' }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
