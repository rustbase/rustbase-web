import React from 'react';
import { AppProps } from 'next/app';
import Router from 'next/router';
import ProgressBar from '@badrap/bar-of-progress';
import './globals.scss';
import Head from 'next/head';

const progress = new ProgressBar({
    size: 2,
    color: '#ed5c66',
});

if (typeof window !== 'undefined') {
    progress.start();
    progress.finish();
}

Router.events.on('routeChangeStart', () => progress.start());
Router.events.on('routeChangeComplete', () => progress.finish());
Router.events.on('routeChangeError', () => progress.finish());

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Rustbase</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
