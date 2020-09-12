import { GET_ITEMS } from './types';

// action creater
export const getItems = (Type, Month) => {
    // action
    return {
        type: GET_ITEMS,
        payload: {Type, Month}
    };
};

// export const fetchItems = () => {

// }