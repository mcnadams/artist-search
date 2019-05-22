import React from 'react';
import { shallow } from 'enzyme';
import Artists from './Artists';

describe('Artists renders', () => {
  it('renders Artists', () => {
    const wrapper = shallow(<Artists artists={[{ name: 'lady' }]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
