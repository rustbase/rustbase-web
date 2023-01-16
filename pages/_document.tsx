import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin=""
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Raleway:wght@300;400;600;700&display=swap"
                        rel="stylesheet"
                    />
                    <meta name="language" content="en-US" />
                    <meta
                        name="url"
                        content="https://https://www.rustbase.app/"
                    />
                    <meta name="author" content="Rustbase" />
                    <meta name="Audience" content="all" />
                    <meta
                        name="description"
                        content="A noSQL key-value database cross-platform program written in Rust."
                    />
                    <meta
                        name="keywords"
                        content="database, nosql, key-value, rust, rustbase, rustbaseapp, dustdata, opensource, lightweight, fast, modern"
                    />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta
                        name="apple-mobile-web-app-title"
                        content="Rustbase"
                    />
                    <meta
                        name="apple-mobile-web-app-status-bar-style"
                        content="black"
                    />
                    <meta name="rating" content="general" />
                    <meta name="robots" content="ALL, follow" />
                    <meta name="googlebot" content="ALL" />
                    <meta name="distribution" content="global" />
                    <meta name="expires" content="0" />
                </Head>
                <main>
                    <Main />
                    <NextScript />
                </main>
            </Html>
        );
    }
}
