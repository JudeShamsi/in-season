import { v1 as uuid } from 'uuid';
import { GET_ITEMS, ITEMS_LOADING } from '../actions/types';

// the reducer is the data I want put into the store
const initialState = {
    items: [],
    loading: false, 
    selectedItems: []
}



export default function(state = initialState, action){
    switch(action.type) {
        case GET_ITEMS:
            const newItems = state.items.filter(item => item.Type === action.payload.Type && item[action.payload.Month] === "Y")
            console.log("New Items: " , newItems);
            return {    
                ...state,            
                selectedItems: newItems,
                loading: false
            }
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
};