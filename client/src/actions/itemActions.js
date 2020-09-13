import axios from 'axios';
import { GET_ITEMS, ITEMS_LOADING } from './types';

// action creater
export const getItems = (type, month) => dispatch => {
    // action
    dispatch(setItemsLoading());
    console.log("TYPE: ", type);
    console.log("MONTH: ", month)
    axios
        .get('/api/foodItems', {
            "type": "type",
            "month": "month"
        })
        .then(res => 
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            })
        )
    // return {
    //     type: GET_ITEMS,
    //     payload: {Type, Month}
    // };
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}