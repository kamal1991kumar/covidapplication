import { storage } from "./storage";

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
    }
}