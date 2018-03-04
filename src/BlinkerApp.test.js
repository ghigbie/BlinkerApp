import React from 'react';
import ReactDOM from 'react-dom';
import BlinkerApp from './BlinkerApp';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import Header from './components/Header/Header';
import Display from './components/Display/Display';
import Footer from './components/Footer/Footer';

describe('<BlinkerApp />', () =>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BlinkerApp />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});


describe('<Header />', () => {
  it('should render a <Header /> component', () => {
    const wrapper = shallow(<BlinkerApp />);
    expect(wrapper.find(Header));
  });
});

describe('<Display />', () => {
  it('should render a <Display /> component', () => {
    const wrapper = shallow(<BlinkerApp />);
    expect(wrapper.find(Display));
  });
});

describe('<Footer />', () => {
  it('should render a <Footer /> component', () => {
    const wrapper = shallow(<BlinkerApp />);
    expect(wrapper.find(Footer));
  });
});
