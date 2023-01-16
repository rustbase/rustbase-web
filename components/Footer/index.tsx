import React from 'react';
import Image from 'next/image';
import Icon from '../../public/icon.svg';
import styles from './styles.module.scss';

function Footer() {
    return (
        <footer className={styles.wrapper}>
            <div className={styles.brand}>
                <Image
                    className={styles.icon}
                    src={Icon}
                    alt="Favicon"
                    width={45}
                    height={45}
                    onClick={() => {
                        window.location.href = '/';
                    }}
                />
                <span>Rustbase</span>
            </div>

            <div></div>

            <div className={styles.menu}>
                <div>Rustbase © Apache-2.0 {new Date().getFullYear()}</div>

                <div>
                    Design by:{' '}
                    <a
                        className={styles.user}
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/gabrielmzl"
                    >
                        mzl
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
