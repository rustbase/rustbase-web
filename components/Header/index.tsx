import React, { useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import Icon from '../../public/icon.svg';
import { AiOutlineMenu } from 'react-icons/ai';

type Link = {
    href?: string;
    label: string;
    isDropdown: boolean;
    content?: Link[];
};

function Header({ links }: { links: Link[] }) {
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
                    {links
                        .filter((link) => {
                            return !link.isDropdown;
                        })
                        .map((link) => {
                            return (
                                <a
                                    className={styles.dropdown}
                                    key={link.label}
                                    href={link.href as string}
                                >
                                    <span className={styles.item}>
                                        {link.label}
                                    </span>
                                </a>
                            );
                        })}

                    {links
                        .filter((link) => {
                            return link.isDropdown;
                        })
                        .map((link) => {
                            return (
                                <div
                                    className={styles.dropdown}
                                    key={link.label}
                                >
                                    <span className={styles.item}>
                                        {link.label}
                                    </span>
                                    <span className={styles.content}>
                                        {link.content?.map((content) => {
                                            return (
                                                <a
                                                    href={
                                                        content.href as string
                                                    }
                                                    key={content.label}
                                                >
                                                    {content.label}
                                                </a>
                                            );
                                        })}
                                    </span>
                                </div>
                            );
                        })}
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
                        {links
                            .filter((link) => {
                                return !link.isDropdown;
                            })
                            .map((link) => {
                                return (
                                    <span
                                        key={link.label}
                                        className={styles.item}
                                        onClick={() => {
                                            window.location.assign(
                                                link.href as string
                                            );
                                        }}
                                    >
                                        {link.label}
                                    </span>
                                );
                            })}

                        {links
                            .filter((link) => {
                                return link.isDropdown;
                            })
                            .map((link) => {
                                return (
                                    <div key={link.label}>
                                        <p className={styles.dropdown}>
                                            {link.label}
                                        </p>
                                        {link.content?.map((content) => {
                                            return (
                                                <div
                                                    className={styles.content}
                                                    key={content.label}
                                                >
                                                    <a
                                                        href={content.href}
                                                        className={styles.link}
                                                    >
                                                        {content.label}
                                                    </a>
                                                </div>
                                            );
                                        })}
                                    </div>
                                );
                            })}
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
