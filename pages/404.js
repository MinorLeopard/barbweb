import React from 'react'
import Head from 'next/head';
import Img from 'next/image';
import { Fade } from "react-awesome-reveal";
import Notfound from '../images/404.svg';
import "@fontsource/ubuntu";
const PageNotFound = () => {
    return (
        <div id="wrapper">
         <Head>
            <title>404 Not Found</title>
            <link rel="icon" type='image/png' href="https://www.linkpicture.com/q/favicon_18.png" />
            <link rel="shortcut-icon" type='image/png' href='https://www.linkpicture.com/q/favicon_18.png'/>
            <link rel='preconnect' href='https://fonts.googleapis.com/css2?family=Ubuntu&display=swap'/>
      <link href='https://fonts.googleapis.com/css2?family=Ubuntu&display=swap' rel='stylesheet'/>
      <meta name="keywords" content="BARB, BARB SALON SERVICES, BARB APP, BEAUTY,BARB SALON MANAGER"></meta>
      <meta name="theme-color" content="red"/>
        <meta name="msapplication-TileColor" content="red"/>
        <meta name="msapplication-navbutton-color" content="red"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="red"/>
        </Head>
        <div id="info">
            <Fade><center><Img src={Notfound} alt="404 not found" height="500px" width="500px"/></center></Fade>
            </div>
        </div>
    )
}

export default PageNotFound
