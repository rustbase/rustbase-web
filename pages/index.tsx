import React from 'react';
import { GetServerSideProps } from 'next';

export default function Home() {
    return <div></div>;
}

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        redirect: {
            destination: '/introduction/getting-started',
            permanent: true,
        },
    };
};
