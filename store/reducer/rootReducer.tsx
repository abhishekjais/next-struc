import productreducer, { initialState as product } from './product';
import { combineReducers } from 'redux';



export const initialState = {
    product: product
};
const rootReducer = combineReducers({
    product: productreducer
});
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;