import MenuItem from "./MenuItem"

const Navigation = () => {
    return (
        <ul>
            {[...Array(5)].map((_, i)=>(
                <MenuItem/>
            ))}
        </ul>
    )
}

export default Navigation
