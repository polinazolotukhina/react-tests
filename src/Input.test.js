import React from 'react';
import   { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../test/testUtils'
import Input from './Input';



const setup = (initialState={})  => {
    const store = storeFactory(initialState)
    const wrapper =  shallow(<Input store={store}/>)
    console.log('WRAPPER', wrapper.debug())
}
setup();

describe('render', ()=>{
    describe('word has not been guessed', ()=>{
        test('renders component without errors', ()=>{

        })
        test('renders input box', ()=>{

        })
        test('renders submit btn', ()=>{

        })
    })
    describe('word has  been guessed', ()=>{

        test('does not renders input box', ()=>{

        })
        test('does not renders submit btn', ()=>{

        })

    })


})

describe('state updating', ()=>{

})
