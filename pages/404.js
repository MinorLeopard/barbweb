import React from 'react'
import Head from 'next/head';

const PageNotFound = () => {
    return (
        <div id="wrapper">
         <Head>
            <title>404 Not Found </title>
        </Head>
        <div id="info">
                <center><h2>This page could not be found</h2></center>
            </div>
            <center><img src="https://i.imgur.com/qIufhof.png" alt='Not Found' /></center>
        </div>
    )
}

export default PageNotFound