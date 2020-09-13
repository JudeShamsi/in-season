import { GET_ITEMS, ITEMS_LOADING, SET_SELECTED_ITEMS } from '../actions/types';

// the reducer is the data I want put into the store
const initialState = {
    items: [],
    loading: false, 
    selectedItems: []
}

export default function(state = initialState, action){
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
            }
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }
        case SET_SELECTED_ITEMS:
            const newItems = state.items.filter(item => item.Type === action.payload.type && item[action.payload.month] === "Y")
            return {    
                ...state,            
                selectedItems: newItems,
            }
        default:
            return state
    }
};