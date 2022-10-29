import React, { useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import Icon from '../../public/icon.svg';
import { AiOutlineMenu } from 'react-icons/ai';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className={styles.wrapper}>
                <div>
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
                </div>

                <div className={styles.menu}>
                    <div className={styles.dropdown}>
                        <span
                            className={styles.item}
                            onClick={() => {
                                window.location.assign(
                                    'https://docs.rustbase.app'
                                );
                            }}
                        >
                            Documentation
                        </span>
                    </div>

                    <div className={styles.dropdown}>
                        <span
                            className={styles.item}
                            onClick={() => {
                                window.location.assign(
                                    'https://github.com/rustbase/rustbase'
                                );
                            }}
                        >
                            Github
                        </span>
                    </div>

                    <div className={styles.dropdown}>
                        <span className={styles.item}>Components</span>
                        <span className={styles.content}>
                            <button
                                onClick={() => {
                                    window.location.assign(
                                        'https://github.com/rustbase/dustdata'
                                    );
                                }}
                            >
                                DustData
                            </button>
                            <button
                                onClick={() => {
                                    window.location.assign(
                                        'https://github.com/rustbase/rustbase-cli'
                                    );
                                }}
                            >
                                Rustbase CLI
                            </button>
                        </span>
                    </div>
                </div>

                <div>
                    <AiOutlineMenu
                        size={35}
                        className={styles.menuMobile}
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    />
                </div>
            </header>
            {isOpen && (
                <>
                    <div className={styles.mobile}>
                        <span
                            className={styles.item}
                            onClick={() => {
                                window.location.assign(
                                    'https://docs.rustbase.app'
                                );
                            }}
                        >
                            Documentation
                        </span>
                        <span
                            className={styles.item}
                            onClick={() => {
                                window.location.assign(
                                    'https://github.com/rustbase/rustbase'
                                );
                            }}
                        >
                            Github
                        </span>

                        <span
                            onClick={() => {
                                window.location.assign(
                                    'https://github.com/rustbase/dustdata'
                                );
                            }}
                        >
                            DustData
                        </span>
                        <span
                            onClick={() => {
                                window.location.assign(
                                    'https://github.com/rustbase/rustbase-cli'
                                );
                            }}
                        >
                            Rustbase CLI
                        </span>
                    </div>
                    <div
                        onClick={() => {
                            setIsOpen(false);
                        }}
                        className={styles.back}
                    />
                </>
            )}
        </>
    );
}

export { Header };
