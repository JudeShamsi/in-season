import axios from 'axios';
import { GET_ITEMS, ITEMS_LOADING, SET_SELECTED_ITEMS } from './types';

// thunk creater
export const getItems = () => dispatch => {
    // action
    dispatch(setItemsLoading());

    axios
        .get('/api/foodItems')
        .then(res => {
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            })
        }
        )
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}

export const setSelectedItems = (month, type) => dispatch => {
    console.log("YOU BETTER BE CALLED: ", month, type);
    dispatch({
        type: SET_SELECTED_ITEMS,
        payload: {type, month}
    });
}