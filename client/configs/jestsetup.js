import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

configure({ adapter: new Adapter() });
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
// Make Enzyme functions available in all test files without importing
global.requestAnimationFrame = (callback) => {
    setTimeout(callback, 0);
};
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.React = React;

/* eslint-disable*/

// Fail tests on any warning
console.error = (message) => {
   throw new Error(message);
};

/* eslint-disable*/
