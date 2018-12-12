import { getLetterMatchCount } from '../helpers'

export const actionTypes = {
    CORRECT_GUESS:  'CORRECT_GUESS',
    GUESSED_WORD: 'GUESSED_WORD'
}

export const guessWord=(guessedWord)=> {
    return  function(dispatch, getState) {
        const secretWord = getState().secretWord;
        const  LetterMatchCount = getLetterMatchCount(guessedWord, secretWord);

        dispatch({
            type: actionTypes.GUESSED_WORD,
            payload: {guessedWord, LetterMatchCount}
        })
        if (guessedWord=== secretWord){
            dispatch({
                type: actionTypes.CORRECT_GUESS,

            })

        }
    };
};
