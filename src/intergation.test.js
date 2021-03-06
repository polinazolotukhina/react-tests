import { storeFactory } from '../test/testUtils';
import { guessWord } from './actions';


describe('guess action dispatcher', ()=>{
    const secretWord = 'party';
    const unseccesfull = 'train';

    describe('no guess words', ()=>{
        let store;
        const initialState = { secretWord }
        beforeEach(()=>{
            store = storeFactory(initialState);
        })
        test('updates state correctly for seccesfull guess', ()=>{
            store.dispatch(guessWord(secretWord))
            const newState = store.getState();
            const expectedState = {
                secretWord,
                success: true,
                guessedWords: [{
                    guessedWord:secretWord,
                    letterMatchCount: 5
                }]
            }
            expect(newState).toEqual(expectedState)
        })
        test('updates state correctly for unseccesfull guess', ()=>{
            store.dispatch(guessWord(unseccesfull))
            const newState = store.getState()
            const expectedState =  {
                secretWord,
                success: false,
                guessedWords: [{
                    guessedWord: unseccesfull,
                    letterMatchCount: 3
                }]
            }

            expect(newState).toEqual(expectedState)
        })
    })
    describe('some guessedWords words', ()=>{
        const guessedWords = [{ guessedWord: 'agile', letterMatchCount: 1}]
        const initialState = { guessedWords, secretWord}
        let store;
        beforeEach(()=>{
            store = storeFactory(initialState)
        })
        test('updates state correctly for seccesfull guess', ()=>{
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedState =  {
                secretWord,
                success: true,
                guessedWords: [...guessedWords, {
                    guessedWord: secretWord,
                    letterMatchCount: 5
                }]
            }
            expect(newState).toEqual(expectedState)
        })
        test('updates state correctly for unseccesfull guess', ()=>{
            store.dispatch(guessWord(unseccesfull))
            const newState = store.getState();
            const expectedState =  {
                secretWord,
                success: false,
                guessedWords: [...guessedWords, {
                    guessedWord: unseccesfull,
                    letterMatchCount: 3,

                }]
            }
            expect(newState).toEqual(expectedState)
        })
    })

})
