import React from 'react';
import { shallow } from 'enzyme';
import Album from './Album';

describe('Album renders', () => {
  it('renders Album', () => {


    const wrapper = shallow(<Album artist={'lady'} album={{ date: 'yes', id: 'no' }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
