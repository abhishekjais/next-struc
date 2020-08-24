import Router from 'next/router';
import actions from '../store/actions';
import { getCookie } from '../utils/cookie';

// checks if the page is being loaded on the server, and if so, get auth token from the cookie:
export default function initialize(ctx: any) {

    if (ctx.isServer) {
        if (ctx.req.headers.cookie) {
            ctx.store.dispatch(actions.reauthenticate(getCookie('token', ctx.req)));
        }
    } else {
        const token = ctx.store.getState().authentication.token;
        ctx.store.dispatch(actions.getProduct({}, 'product'));

        if (token && (ctx.pathname === '/signin' || ctx.pathname === '/signup')) {
            setTimeout(function () {
                Router.push('/');
            }, 0);
        }
    }


}