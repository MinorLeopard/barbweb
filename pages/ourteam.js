import CardComponent from "../components/CardComponent"
import CardDisplay from "../components/CardDisplay"
import techTeamDisplay from "../components/techTeamDisplay"
import Head from 'next/head';
const ourteam = () => {
    return (
<section className="max-w-6xl px-4 py-12 mx-auto sm:px-6 lg:px-4">
<Head>
        <link rel="icon" href="/favicon.svg" />
        <title></title>
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
