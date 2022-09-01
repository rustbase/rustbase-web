import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { GetServerSideProps } from 'next';
import styles from './App.module.scss';
import { Header } from '../components/Header';
import { BsCheck } from 'react-icons/bs';

const DynTerm = dynamic(() => import('../components/Terminal'), {
    ssr: false,
});

function App({
    stars,
    forks,
    license,
}: {
    stars: number | null;
    forks: number | null;
    license: string | null;
}) {
    const [host, setHost] = useState('');
    const [download, setDownload] = useState('');
    const [isCopyClicked, setIsCopyClicked] = useState(false);

    useEffect(() => {
        setHost(`${window.location.protocol}//${window.location.host}`);
    }, []);

    useEffect(() => {
        setDownload(`curl -L ${host}/install | bash`);
    }, [host]);

    return (
        <div>
            <Header />

            <div className={styles.content}>
                <h1 className={styles.title}>
                    A noSQL key-value <a>database</a> cross-platform program
                    written in <a href="https://www.rust-lang.org/">Rust</a>.
                </h1>

                <p className={styles.description}>
                    Rustbase is open source, lightweight, modern and fast NoSQL
                    database, using DustData as the storage engine.
                </p>

                <div className={styles.download}>
                    <code className={styles.code}>$ {download}</code>
                    <button
                        className={styles.copy}
                        style={{
                            background: isCopyClicked
                                ? 'linear-gradient(269.99deg, #5CED80, #53D473)'
                                : null,
                            boxShadow: isCopyClicked
                                ? '0px 4px 4px rgba(0, 0, 0, 0.25)'
                                : null,
                        }}
                        onClick={() => {
                            setIsCopyClicked(true);
                            navigator.clipboard.writeText(download);
                        }}
                    >
                        Copy {isCopyClicked && <BsCheck size={25} />}
                    </button>
                </div>

                <div className={styles.stats}>
                    {stars && (
                        <>
                            <div>
                                <div>{stars}</div>
                                <h3>Stars on Github</h3>
                            </div>
                            <div>
                                <div>{license}</div>
                                <h3>License</h3>
                            </div>
                            <div>
                                <div>{forks}</div>
                                <h3>Forks on Github</h3>
                            </div>
                        </>
                    )}
                </div>

                <DynTerm />
            </div>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const gitFetch = await fetch(
        'https://api.github.com/repos/rustbase/rustbase'
    );
    const data = await gitFetch.json();

    if (gitFetch.status === 403) {
        return {
            props: { stars: null, license: null, forks: null },
        };
    }

    const stars = data.stargazers_count;
    const license = data.license.key.toUpperCase();
    const forks = data.forks;

    return {
        props: { stars, license, forks },
    };
};

export default App;
