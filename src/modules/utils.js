import { storage } from "./storage";
import dateformat from 'dateformat';

export const utils = {
    linkActive( location, pathname ) {
        return location.pathname === pathname ? 'active' : '';
    },
    isAuthorizedUser() {
        const _token = storage.token.get();
        return _token != null;
    },
    userLogout( history ) {
        storage.token.clear();
        storage.userInfo.clear();
        history.push( '/' );
    },
    dateFormate( d ) {
        const now = new Date( d );
        return dateformat(now, "mmmm dS, yyyy hh:MM TT");
    }
}