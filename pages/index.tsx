import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './App.module.scss';
import { Header } from '../components/Header';
import { BsCheck } from 'react-icons/bs';

const DynTerm = dynamic(() => import('../components/Terminal'), {
    ssr: false,
});

function App() {
    const [host, setHost] = useState('');
    const [download, setDownload] = useState('');
    const [stars, setStars] = useState<number | null>(null);
    const [forks, setForks] = useState<number | null>(null);
    const [license, setLicense] = useState('');
    const [isCopyClicked, setIsCopyClicked] = useState(false);

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
                setLicense(data.license.key.toUpperCase());
            });
    }, []);

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
                </div>

                <DynTerm />
            </div>
        </div>
    );
}

export default App;
