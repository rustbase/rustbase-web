import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import styles from './App.module.scss';
import { Header } from '../components/Header';
import { BsArrowRightShort } from 'react-icons/bs';
import { Footer } from '../components/Footer';

const DynTerm = dynamic(() => import('../components/Terminal'), {
    ssr: false,
});

const links = [
    {
        isDropdown: false,
        href: 'https://docs.rustbase.app',
        label: 'Documentation',
    },
    {
        isDropdown: false,
        href: 'https://github.com/rustbase/rustbase',
        label: 'GitHub',
    },
    {
        isDropdown: false,
        href: 'https://donate.stripe.com/4gw8xx3wc1Uyb96288',
        label: 'Donate',
    },
    {
        isDropdown: true,
        label: 'Components',
        content: [
            {
                isDropdown: false,
                href: '/dustdata',
                label: 'DustData',
            },
            {
                isDropdown: false,
                href: 'https://github.com/rustbase/rustbase-cli',
                label: 'Rustbase CLI',
            },
        ],
    },
];

function App() {
    const [host, setHost] = useState('');
    const [download, setDownload] = useState('');
    const [stars, setStars] = useState<number | null>(null);
    const [forks, setForks] = useState<number | null>(null);

    useEffect(() => {
        setHost(`${window.location.protocol}//${window.location.host}`);
    }, []);

    useEffect(() => {
        setDownload(`curl -L ${host}/install | bash`);
    }, [host]);

    useEffect(() => {
        fetch('https://api.github.com/repos/rustbase/rustbase')
            .then((res) => res.json())
            .then((data) => {
                setStars(data.stargazers_count);
                setForks(data.forks_count);
            });
    }, []);

    return (
        <div>
            <Head>
                <title>
                    Rustbase - A noSQL key-value database cross-platform program
                    written in Rust.
                </title>
            </Head>
            <Header links={links} />

            <div className={styles.content}>
                <div className={styles.initialHome}>
                    <h1 className={styles.title}>
                        A noSQL key-value <span>database</span> cross-platform
                        program written in{' '}
                        <a href="https://www.rust-lang.org/">Rust</a>.
                    </h1>

                    <p className={styles.description}>
                        Rustbase is open source, lightweight, modern and fast
                        NoSQL database, using DustData as the storage engine.
                    </p>

                    <a href="https://docs.rustbase.app" className={styles.try}>
                        See docs{' '}
                        <BsArrowRightShort className={styles.icon} size={30} />
                    </a>
                </div>

                <div className={styles.download}>
                    <h1 className={styles.title}>
                        Easy to <span>install</span>
                    </h1>

                    <div className={styles.clipboard}>
                        <code className={styles.code}>$ {download}</code>
                        <div id="copy" className={styles.copy}>
                            <button
                                onClick={(e) => {
                                    document
                                        .getElementById('copy')
                                        .setAttribute('clicked', 'true');
                                    navigator.clipboard.writeText(download);
                                }}
                            >
                                Copy{' '}
                                <BsArrowRightShort
                                    className={styles.icon}
                                    size={35}
                                />
                            </button>
                        </div>
                    </div>

                    <p className={styles.description}>
                        Supported on Linux & WSL
                    </p>
                </div>

                <div className={styles.community}>
                    <h1>
                        Supported by the{' '}
                        <a
                            style={{
                                background:
                                    'linear-gradient(269.99deg, #ed5c66, #f28099)',
                                backgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                WebkitBackgroundClip: 'text',
                            }}
                        >
                            community
                        </a>
                    </h1>

                    <div className={styles.stats}>
                        {stars && forks && (
                            <>
                                <div>
                                    <div>{stars}</div>
                                    <h3>Stars on Github</h3>
                                </div>
                                <div>
                                    <div>1+</div>
                                    <h3>Contributors</h3>
                                </div>
                                <div>
                                    <div>{forks}</div>
                                    <h3>Forks on Github</h3>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <div className={styles.terminal}>
                    <h1>
                        <a
                            style={{
                                background:
                                    'linear-gradient(269.99deg, #ed5c66, #f28099)',
                                backgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                WebkitBackgroundClip: 'text',
                            }}
                        >
                            Simple
                        </a>{' '}
                        query language
                    </h1>

                    <div className={styles.term}>
                        <div className={styles.header}>
                            <div></div>
                            <div></div>
                            <div className={styles.buttons}>
                                <div
                                    style={{
                                        backgroundColor: 'rgba(233, 99, 121)',
                                        width: '15px',
                                        height: '15px',
                                        borderRadius: '50%',
                                    }}
                                />
                                <div
                                    style={{
                                        backgroundColor: 'rgba(231, 222, 121)',
                                        width: '15px',
                                        height: '15px',
                                        borderRadius: '50%',
                                    }}
                                />
                                <div
                                    style={{
                                        backgroundColor: 'rgba(103, 228, 128)',
                                        width: '15px',
                                        height: '15px',
                                        borderRadius: '50%',
                                    }}
                                />
                            </div>
                        </div>

                        <DynTerm />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default App;
