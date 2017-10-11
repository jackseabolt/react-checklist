import {ADD_ITEM} from './actions'; 

const initialState = {
    items: []
}

export const groceryListReducer = (state=initialState, action) => {
    if(action.type === ADD_ITEM){
        return Object.assign({}, state, {items: [...state.items, action.text]}) 
    }
    return state; 
}