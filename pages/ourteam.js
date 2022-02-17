import CardComponent from "../components/CardComponent"
import CardDisplay from "../components/CardDisplay"
import techTeamDisplay from "../components/techTeamDisplay"
import Head from 'next/head';
import "@fontsource/ubuntu"
const ourteam = () => {
    return (
<section className="max-w-6xl px-4 py-12 mx-auto sm:px-6 lg:px-4">
<Head>
<title>Team</title>
<link rel="shortcut icon" type='image/png' href="https://www.linkpicture.com/q/favicon_27.png" />
        <meta httpEquiv="content-language" content="en"></meta>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="keywords" content="BARB, BARB SALON SERVICES, BARB APP, BEAUTY,BARB SALON MANAGER"></meta>
        <meta name="author" content="BARB"></meta>
        <meta name="publisher" content="BARB"></meta>
        <meta name="copyright" content="BARB"></meta>
        <meta name="description" content="Barb is salon booking app.Install BARB SALON MANAGER to register your beauty salon"></meta>
        <meta name="page-topic" content="Media"></meta>
        <meta name="page-type" content="Beauty"></meta>
        <meta name="audience" content="Everyone"></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta name="title" content="BARB SALON SERVICES"/>
        <meta name="description" content="BARB is a salon booking and appointment app to book salon nearest to you"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.barb.co.in/"/>
        <meta property="og:title" content="BARB SALON SERVICES"/>
        <meta property="og:description" content="BARB is a salon booking and appointment app to book salon nearest to you"/>
        <meta property="og:image" content="https://www.linkpicture.com/q/BARB_1.png"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://www.barb.co.in/"/>
        <meta property="twitter:title" content="BARB SALON SERVICES"/>
        <meta property="twitter:description" content="BARB is a salon booking and appointment app to book salon nearest to you"/>
        <meta property="twitter:image" content="https://www.linkpicture.com/q/BARB_1.png"/>
        <meta name="theme-color" content="lightgreen"/>
        <meta name="msapplication-TileColor" content="lightgreen"/>
        <meta name="msapplication-navbutton-color" content="lightgreen"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="lightgreen"/>
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
