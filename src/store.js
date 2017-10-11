import {createStore} from 'redux'; 
import {groceryListReducer} from './groceryListReducer'; 
const store = createStore(groceryListReducer); 


console.log(store.getState()); 
let unsubscribe = store.subscribe(() => console.log(store.getState()) );
unsubscribe();

export default store; 