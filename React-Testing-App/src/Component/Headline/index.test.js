import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';

import { findByTestAttr, checkProps} from '../../../Utilities/index';
import Header from '../Header';

const setUp = (props={}) => {
    const component = shallow(<Headline {...props} />);
    return component;
};

describe('Headline Component', () => {
    describe('Have props', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc : 'Test Desc'
            };
            wrapper = setUp(props);
        });

        it('Should render without errors', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1);
        });

        it('Should render a H1', () => {
            const h1 = findByTestAttr(wrapper,'header');
            expect(h1.length).toBe(1);
        });

        it('Should render a Description', () => {
            const desc = findByTestAttr(wrapper,'description');
            expect(desc.length).toBe(1);
        });

    });

    describe('Have NO props', () => {

        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });

        it('Should not render', () => {
            const component = findByTestAttr(wrapper,'HeadLineComponent');
            expect(component.length).toBe(0);
        });
    });
});

describe('Headline component', () => {

    describe('Checking propTypes',() => {
        it('should not throw a warning', () => {
            const expectedProps = {
                  header : 'Test Header',
                  dest : 'Test dest',
                  teamArr : [{
                      fname : 'Test fName',
                      lname : 'Test lName',
                      email : 'test@email.com',
                      age : 26,
                      onlineStatus : false
                  }]
            };
            const propsErr = checkProps(Headline, expectedProps);
            expect(propsErr).toBeUndefined();

        });

    });

    describe('Have props', () => {

    });

    describe('Have no props', () => {

    });

});