import { v1 as uuid } from 'uuid';
import { GET_ITEMS } from '../actions/types';

const initialState = {
    items: [
        {
            _id : uuid(),
            Type: "Vegetable",
            Name : "Brussel Sprouts",
            January : "N",
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
        }
    ]
}

export default function(state = initialState, action){
    switch(action.type) {
        case GET_ITEMS:
            return {
                ... state
            }
        default:
            return state
    }
};