import {ADD_ITEM} from './actions'; 

const initialState = {
    items: []
}

export const groceryListReducer = (state=initialState, action) => {
    if(action.type === ADD_ITEM){
        // console.log(Object.assign({}, state, {guesses: [...state.items, action.text]}))
        return Object.assign({}, state, {items: [...state.items, action.text]})
        // const itemcopy = state.items; 
        // itemcopy.push(action.text); 
        // state.items = itemcopy; 
        // return state; 
    }
    return state; 
}