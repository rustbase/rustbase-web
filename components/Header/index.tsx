import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import Icon from '../../public/icon.svg';

function Header() {
    return (
        <div className={styles.wrapper}>
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
                                'https://github.com/rustbase/rustbase'
                            );
                        }}
                    >
                        Github
                    </span>
                </div>

                <div className={styles.dropdown}>
                    <span
                        className={styles.item}
                        onClick={() => {
                            window.location.assign(
                                'https://github.com/rustbase/dustdata'
                            );
                        }}
                    >
                        DustData
                    </span>
                </div>
            </div>

            <div></div>
        </div>
    );
}

export { Header };
