import { v1 as uuid } from 'uuid';
import { GET_ITEMS } from '../actions/types';

// the reducer is the data I want put into the store
const initialState = {
    items: [
        {
            _id : uuid(),
            Type: "Vegetable",
            Name : "Brussel Sprouts",
            January : "Y",
            February: "N",
            March: "N",
            April: "N",
            May: "N",
            June: "N",
            July: "N",
            August: "N",
            September: "Y",
            October: "Y",
            November: "Y",
            December: "Y"
        },
        {
            _id: uuid(),
            Type: "Vegetable",
            Name: "Mushroom",
            January: "Y",
            February: "Y",
            March: "Y",
            April: "N",
            May: "N",
            June: "N",
            July: "N",
            August: "N",
            September: "N",
            October: "N",
            November: "Y",
            December: "Y"
        },
        {
            _id: uuid(),
            Type: "Fruit",
            Name: "Apple",
            January: "Y",
            February: "Y",
            March: "Y",
            April: "N",
            May: "N",
            June: "N",
            July: "N",
            August: "N",
            September: "N",
            October: "N",
            November: "Y",
            December: "Y"
        }
    ], 

    selectedItems: []
}



export default function(state = initialState, action){
    switch(action.type) {
        case GET_ITEMS:
            const newItems = state.items.filter(item => item.Type === action.payload.Type && item[action.payload.Month] === "Y")
            console.log("New Items: " , newItems);
            return {    
                ...state,            
                selectedItems: newItems
            }
        default:
            return state
    }
};