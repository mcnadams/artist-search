import React from 'react';
import { shallow } from 'enzyme';
import Lyrics from './Lyrics';

describe('Lyrics renders', () => {
  it('renders Lyrics', () => {
    const wrapper = shallow(<Lyrics lyrics={'lady'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
