import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import styles from './styles.module.scss';
import { BsCheck } from 'react-icons/bs';

function DustData() {
    const [ddVersion, setDDVersion] = useState('');
    const [isCopyClicked, setIsCopyClicked] = useState(false);

    useEffect(() => {
        fetch('https://crates.io/api/v1/crates/dustdata')
            .then((res) => res.json())
            .then((data) => {
                setDDVersion(data.versions[0].num);
            });
    }, []);

    return (
        <div className={styles.content}>
            <Header
                links={[
                    {
                        label: 'Documentation',
                        href: 'https://docs.rustbase.app',
                        isDropdown: false,
                    },
                    {
                        isDropdown: false,
                        href: 'https://donate.stripe.com/4gw8xx3wc1Uyb96288',
                        label: 'Donate',
                    },
                    {
                        label: 'GitHub',
                        href: 'https://github.com/rustbase/dustdata',
                        isDropdown: false,
                    },
                ]}
            />

            <h1 className={styles.title}>
                A data concurrency control <a>key-value</a> storage engine to
                Rustbase
            </h1>

            <p className={styles.description}>
                DustData is an high performance, noSQL, open source, storage
                engine, Rust library.
            </p>

            <div className={styles.download}>
                <code className={styles.code}>
                    [dependencies]
                    <a id="code">
                        <br />
                        dustdata = {'"'}
                        {ddVersion}
                        {'"'}
                    </a>
                </code>
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

                        const code = document.getElementById('code');

                        navigator.clipboard.writeText(code.innerText);
                    }}
                >
                    Copy {isCopyClicked && <BsCheck size={25} />}
                </button>
            </div>
        </div>
    );
}

export default DustData;
