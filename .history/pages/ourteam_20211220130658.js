import CardComponent from "../components/CardComponent"
import CardDisplay from "../components/CardDisplay"
import techTeam from "../components/techTeamDisply"

const ourteam = () => {
    return (
<section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
    <div class="text-center pb-12">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-heading text-gray-500">
            OUR <span className="font-bold text-gray-700"> TEAM</span>
        </h1>
    </div>
    <CardDisplay/>
    <techTeam/>
</section>
    )
}

export default ourteam
