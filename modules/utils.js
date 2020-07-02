import { useRouter } from "next/router";
import { storage } from "./storage";

export const utils = {
    linkActive( router, pathname ) {
        return router.pathname === pathname ? 'active' : '';
    },
    isAuthorizedUser() {
        const _token = storage.token.get();
        return _token != null;
    },
    userLogout( router ) {
        storage.token.clear();
        storage.userInfo.clear();
        router.push( '/' );
    }
}