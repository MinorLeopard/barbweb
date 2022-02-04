import Contact from "../components/Contact.tsx"
import {Fade} from 'react-awesome-reveal';
import Head from 'next/head';
import "@fontsource/ubuntu"
const contactus = () => {
    return (
        <div>
         <Head>
         <link rel='preconnect' href='https://fonts.googleapis.com/css2?family=Ubuntu&display=swap'/>
      <link href='https://fonts.googleapis.com/css2?family=Ubuntu&display=swap' rel='stylesheet'/>
         <link rel="icon" href="/favicon.png" />
         <link rel="shortcut-icon" type='image/png' href='https://www.linkpicture.com/q/shortcut.png'/>
        <title>Contact Us</title>
        <meta httpEquiv="content-language" content="en"></meta>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="keywords" content="BARB, BARB SALON SERVICES, BARB APP, BEAUTY,BARB SALON MANAGER"></meta>
        <meta name="author" content="BARB"></meta>
        <meta name="publisher" content="BARB"></meta>
        <meta name="copyright" content="BARB"></meta>
        <meta name="description" content="Barb is salon booking app"></meta>
        <meta name="page-topic" content="Media"></meta>
        <meta name="page-type" content="Beauty"></meta>
        <meta name="audience" content="Everyone"></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta property="og:title" content="BARB APP" />
        <meta property="og:description" content="Barb is salon booking app" />
        <meta property="og:image" content="https://www.linkpicture.com/q/BARB_1.png" />
        <meta name="twitter:title" content="Barb Salon Services"/>
        <meta name="twitter:description" content="Barb is an salon boking app"/>
        <meta name="twitter:image" content="https://www.linkpicture.com/q/BARB_1.png"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:creator" content="BARB" />
        <meta name="theme-color" content="lightgreen"/>
        <meta name="msapplication-TileColor" content="lightgreen"/>
        <meta name="msapplication-navbutton-color" content="lightgreen"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="lightgreen"/>
        
      </Head>
      <Fade>
            <Contact/>
            </Fade>
        </div>
    )
}

export default contactus
