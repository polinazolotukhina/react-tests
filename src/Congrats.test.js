import React from 'react';
import   { shallow } from 'enzyme';



import { findByTestAttr, checkProps } from '../test/testUtils'
import Congrats from './Congrats';


const  defaultProps = {success: false}


const setup = (props={}) =>{
    const setupProps = {...defaultProps, ...props}
    return shallow(<Congrats {...setupProps} />)
}

test('renders without error', ()=>{
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1)

});

test('renders no text when Success prop is false', ()=>{
    const wrapper = setup({ success:false });
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('')


});

test('renders congrats text when Success prop is true', ()=>{
    const wrapper = setup({ success:true });
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text().length).not.toBe('')
});
test('does not complain with the expected props', ()=>{
    const expectedProps = {success: false};
    checkProps( Congrats, expectedProps)
})
