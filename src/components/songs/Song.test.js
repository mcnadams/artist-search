import React from 'react';
import { shallow } from 'enzyme';
import Song from './Song';

describe('Song renders', () => {
  it('renders Song', () => {
    const wrapper = shallow(<Song artist={'lady'} song={{ date: 'yes', id: 'no' }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
