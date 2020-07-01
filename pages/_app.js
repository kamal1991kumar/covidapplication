import Head from 'next/head';
import Header from '../views/HeaderView';
import { useRouter } from "next/router";
import '../scss/style.scss';

export default function App( { Component, pageProps } ) {

    const router = useRouter();

    return(
        <>
            <Head>
                <title>Covid Application</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            { router.pathname === '/' || router.pathname === '/not-found' ? null : <Header /> }
            <Component { ...pageProps } Router={ router } />
        </>
    );

}