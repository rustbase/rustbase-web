import React from 'react';
import { GetServerSideProps } from 'next';

export default function Home() {
    return <div></div>;
}

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        redirect: {
            destination: '/start-here',
            permanent: true,
        },
    };
};
