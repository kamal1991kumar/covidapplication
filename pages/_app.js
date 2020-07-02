import Head from 'next/head';
import Header from '../views/HeaderView';
import { useRouter } from "next/router";
import AuthHoc from '../hoc/authHoc';
import '../scss/style.scss';

export default function App( { Component, pageProps } ) {

    const router = useRouter();

    return(
        <>
            <Head>
                <title>Covid Application</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <AuthHoc Router={ router }>
                { router.pathname === '/' || router.pathname === '/_error' ? null : <Header Router={ router } /> }
                <Component { ...pageProps } Router={ router } />
            </AuthHoc>
        </>
    );

}