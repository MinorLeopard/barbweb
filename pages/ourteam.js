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
