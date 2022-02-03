import { Head } from "next/document"
import MenuItem from "./MenuItem"

const Navigation = () => {
    return (
        <>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet"></link>
          </Head>
        <ul>
            {[...Array(5)].map((_, i)=>(
                <MenuItem/>
            ))}
        </ul>
        </>
    )
}

export default Navigation
