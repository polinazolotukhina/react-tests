import { getLetterMatchCount } from '../helpers';
import axios from 'axios'

export const actionTypes = {
    CORRECT_GUESS:  'CORRECT_GUESS',
    GUESSED_WORD: 'GUESSED_WORD',
    SET_SECRET_WORD : 'SET_SECRET_WORD'
}

export const guessWord=(guessedWord)=> {
    return  function(dispatch, getState) {
        const secretWord = getState().secretWord;
        const  letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

        dispatch({
            type: actionTypes.GUESSED_WORD,
            payload: {guessedWord, letterMatchCount}
        })
        if (guessedWord=== secretWord){
            dispatch({
                type: actionTypes.CORRECT_GUESS,

            })

        }
    };
};


export const getSecretWord = () =>{
        return (dispatch)=> {
            return axios.get('http://localhost:3030')
            .then(response =>{
                dispatch({
                    type:actionTypes.SET_SECRET_WORD,
                    payload: response.data
                })
            })
        }
}
