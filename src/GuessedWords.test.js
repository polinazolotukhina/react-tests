import React from 'react';
import   { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils'
import GuessedWords from './GuessedWords';


const  defaultProps = {
    guessedWords:[{ guessedWord:'train', letterMatchCount: 3 }]
}


const setup = (props={}) =>{
    const setupProps = {...defaultProps, ...props}
    return shallow(<GuessedWords {...setupProps} />)
}


test('does not complain with the expected props', ()=>{
    checkProps( GuessedWords, defaultProps)
})

describe('if there is no word guessed', ()=>{
    let wrapper
    beforeEach(()=>{
        wrapper = setup({guessedWords:[]});
    })
    test('renders without errors', ()=>{
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1)
    })
    test('renders instructions to guess the word', ()=>{
        const instractions = findByTestAttr(wrapper, 'guess-instractions');
        expect(instractions.text().length).not.toBe(0)
    })
})

describe('if there  are words guessed', ()=>{

    const guessedWords = [
        { guessedWord:'train', letterMatchCount: 3 },
        { guessedWord:'agile', letterMatchCount: 1 },
        { guessedWord:'party', letterMatchCount: 5 },
    ]
    let wrapper
    beforeEach(()=>{
        wrapper = setup({guessedWords});

    })

    test('renders without errors', ()=>{
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1)

    })

    test('renders test words sections', ()=>{
        const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
        expect(guessedWordsNode.length).toBe(1)

    })

    test('display correct number of correct words', ()=>{
        const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordNodes.length).toBe(guessedWords.length)
    })
})
