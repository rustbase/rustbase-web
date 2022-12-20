import React from 'react';
import { GetServerSideProps } from 'next';

export default function InstallCli() {
    return (
        <div>
            <h1>Install</h1>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        redirect: {
            destination:
                'https://raw.githubusercontent.com/rustbase/rustbase-install/main/install-cli.sh',
            permanent: true,
        },
    };
};
