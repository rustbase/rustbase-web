import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import 'nextra-theme-docs/style.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Rustbase - Documentation</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
