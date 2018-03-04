import React, {Component} from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import CarTile from './CarTile';
import Modal from './../Modal/Modal';

describe('<CarTile />', () => {
  it('should render a <Modal />', () => {
      const wrapper = shallow(<CarTile />);
      expect(wrapper.find(Modal));
  }); 
});