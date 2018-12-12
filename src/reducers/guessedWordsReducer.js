import { actionTypes } from '../actions';

export default(state=[], action)=> {
    switch (action.type){
        case actionTypes.GUESSED_WORD:
            return [...state, action.payload]
            default:
            return state;
    }
 
}
