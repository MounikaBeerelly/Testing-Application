import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByTestAttr } from '../../../Utilities';

/*
describe('Header Component', () => {

    it('It should render without errors', () => {
        const component = shallow( <Header /> );
        // console.log(component.debug());
        const wrapper = component.find('.headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('It should render a logo', () => {
        const component = shallow( <Header /> );
        // console.log(component.debug());
        const logo = component.find('.logoTxt');
        expect(logo.length).toBe(1);
    })
});
*/

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component;
};

describe('Header Component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('It should render without errors', () => {
        const wrapper = findByTestAttr(component,'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('It should render a logo', () => {
        const logo = component.find(`[data-test='logoText']`);
        expect(logo.length).toBe(1);
    })
});

