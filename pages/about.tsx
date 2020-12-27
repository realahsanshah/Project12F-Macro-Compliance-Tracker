import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';


export interface AboutProps {

}

const About: React.SFC<AboutProps> = () => {
    return (
        <div>
            <Head>
                <title>About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />

            <div>
                <h1>Macro Compliacne Tracker</h1>
                <p>
                    This app will help you ensure your macros are within a selected range to help you achieve your New Years Resolution!
                </p>
            </div>
        </div>
    );
}

export default About;