import Head from 'next/head';

export default function Layout(props) {

    return (
        <>
            <Head>
                <title>Covid Application</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            {props.children}
        </>
    );

}