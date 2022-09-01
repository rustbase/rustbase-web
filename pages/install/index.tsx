import React from 'react';
import { GetServerSideProps } from 'next';

export default function Install() {
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
                'https://raw.githubusercontent.com/rustbase/rustbase-install/main/install.sh',
            permanent: true,
        },
    };
};
