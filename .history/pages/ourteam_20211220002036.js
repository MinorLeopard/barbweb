import CardComponent from "../components/CardComponent"
import CardDisplay from "../components/CardDisplay"

const ourteam = () => {
    return (
        <div>
        <h2 className="font-normal text-gray-800 text-7xl md:text-6xl">OUR <span className="font-extrabold text-gray-500">STORY</span></h2>
            <CardComponent/>
            <CardDisplay/>
        </div>
    )
}

export default ourteam
