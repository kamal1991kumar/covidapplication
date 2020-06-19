import { useRouter } from "next/router";

export const utils = {
    linkActive( pathname ) {
        const router = useRouter();
        return router.pathname === pathname ? 'active' : '';

    }
}