import React from 'react';

export default {
    projectLink: 'https://github.com/rustbase/rustbase', // GitHub link in the navbar
    projectChatLink: 'https://discord.gg/m5ZzWPumbd',
    docsRepositoryBase: 'https://github.com/rustbase/rustbase-web/tree/docs', // base URL for the docs repository
    titleSuffix: ' - Rustbase',
    nextLinks: true,
    prevLinks: true,
    search: true,
    customSearch: null, // customizable, you can use algolia for example
    darkMode: true,
    footer: true,
    footerText: `Apache-2.0 ${new Date().getFullYear()} © Rustbase.`,
    footerEditLink: `Edit this page on GitHub`,
    logo: (
        <>
            <svg
                width="40"
                height="40"
                viewBox="0 0 639 638"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M228.325 38.0903C278.693 -12.2311 360.307 -12.2312 410.675 38.0902L600.657 227.896C651.09 278.284 651.09 360.027 600.657 410.414L410.675 600.221C360.307 650.542 278.693 650.542 228.325 600.221L38.3435 410.414C-12.0904 360.027 -12.0905 278.284 38.3435 227.896L228.325 38.0903Z"
                    fill="url(#paint0_linear_304_2)"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_304_2"
                        x1="-53"
                        y1="-53"
                        x2="691.806"
                        y2="691.505"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#EA4342" />
                        <stop offset="1" stopColor="#F698BB" />
                    </linearGradient>
                </defs>
            </svg>
        </>
    ),
};
