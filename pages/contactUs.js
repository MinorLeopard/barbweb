import Contact from "../components/Contact.tsx"
import Head from 'next/head';
const contactus = () => {
    return (
        <div>
         <Head>
        <link rel="icon" href="/favicon.svg" />
        <title>Contact Us</title>
        <meta http-equiv="content-language" content="en"></meta>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="keywords" content="BARB, BARB SALON SERVICES, BARB APP, BEAUTY"></meta>
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
        <meta property="og:image" content="https://raw.githubusercontent.com/RishiPratap/barbweb/c450214abf3652fc7227bbdaa67ee75dcd1f6444/public/favicon.svg?token=ARKR7YPFLK4WDJIYYGU5UTDB6A2AU" />
        <meta name="twitter:title" content="Barb Salon Services"/>
        <meta name="twitter:description" content="Barb is an salon boking app"/>
        <meta name="twitter:image" content="https://raw.githubusercontent.com/RishiPratap/barbweb/c450214abf3652fc7227bbdaa67ee75dcd1f6444/public/favicon.svg?token=ARKR7YPFLK4WDJIYYGU5UTDB6A2AU"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:creator" content="BARB" />
        <meta name="theme-color" content="#31fb53"/>
      </Head>
            <Contact/>
        </div>
    )
}

export default contactus
