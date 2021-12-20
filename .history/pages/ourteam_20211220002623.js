import CardComponent from "../components/CardComponent"
import CardDisplay from "../components/CardDisplay"

const ourteam = () => {
    return (
        <div className="">
        <h2 className="flex items-center font-normal text-center text-gray-800 text-7xl md:text-6xl">OUR <span className="font-extrabold text-gray-500">STORY</span></h2>
            <CardComponent/>
            <CardDisplay/>
        </div>
    )
}

export default ourteam
