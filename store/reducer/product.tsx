import { PRO_LIST } from '../actions/ActionsTypes';
import { HYDRATE } from 'next-redux-wrapper';

export const initialState = {
    data: []
};

const product = (state = initialState, action: any) => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload.product };
        case PRO_LIST:
            return { ...state, data: action.payload }
        default:
            return state;
    }
};
export default product;