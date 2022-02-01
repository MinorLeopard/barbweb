import CardComponent from "../components/CardComponent"
import CardDisplay from "../components/CardDisplay"
import techTeamDisplay from "../components/techTeamDisplay"
import Head from 'next/head';
const ourteam = () => {
    return (
<section className="max-w-6xl px-4 py-12 mx-auto sm:px-6 lg:px-4">
<Head>
<link rel='preconnect' href='https://fonts.googleapis.com/css2?family=Ubuntu&display=swap'/>
      <link href='https://fonts.googleapis.com/css2?family=Ubuntu&display=swap' rel='stylesheet'/>
        <link rel="icon" href="/favicon.png" />
        <link rel="shortcut-icon" type='image/png' href='https://www.linkpicture.com/q/shortcut.png'/>
        <title>Team</title>
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
        <meta name="theme-color" content="indigo"/>
        <meta name="msapplication-TileColor" content="indigo"/>
        <meta name="msapplication-navbutton-color" content="indigo"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="indigo"/>
        
      </Head>
    <div className="pb-12 text-center">
        <h1 className="text-5xl text-gray-500 md:text-6xl lg:text-7xl font-heading">
            OUR <span className="font-bold text-gray-700"> TEAM</span>
        </h1>
    </div>
    <CardDisplay/>
    <techTeamDisplay/>
</section>
    )
}

export default ourteam
