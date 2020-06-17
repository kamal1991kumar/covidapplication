import Head from 'next/head';
import '../scss/style.scss';

export default function Layout(props) {

    return (
        <html>
            <Head>
                <title>Covid Application</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <body>
                {props.children}
            </body>
        </html>
    );

}