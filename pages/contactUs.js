import Contact from "../components/Contact.tsx"
import {Fade} from 'react-awesome-reveal';
import Head from 'next/head';
import "@fontsource/ubuntu"
const contactus = () => {
    return (
        <div>
            <Head>
            <title>Contact Page</title>
            </Head>
      <Fade>
            <Contact/>
            </Fade>
        </div>
    )
}

export default contactus
