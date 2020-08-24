import Router from 'next/router';
import axios from 'axios';
import { PRO_LIST } from './ActionsTypes';
import { API } from '../../config';



export const getProduct = (route: string, query: any) => {
    return async (dispatch: any) => {
        try {
            const res = await axios.get(`${API}/${route}`, { params: query });
            // console.log(res, 'ppppppppp');

            dispatch({ type: PRO_LIST, payload: res.data });
        } catch (error) {
            console.log(error, 'error.response');
            switch (error.response.status) {
                case 401:
                    Router.push('/');
                    break;
                case 422:
                    alert(error.response.data.meta.message);
                    break;
                case 500:
                    alert('Interval server error! Try again!');
                case 503:
                    alert(error.response.data.meta.message);
                    Router.push('/');
                    break;
                case 503:
                    alert(error.response.statusText);
                    Router.push('/');
                    break;
                default:
                    alert(error.response.data.meta.message);
                    break;
            }
        }
    }
}

export default {
    getProduct
}
