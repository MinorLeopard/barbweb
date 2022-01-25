import Head from 'next/head'
import Contact from '../components/Contact.tsx'
import Features from '../components/Features.tsx'
import Hero from '../components/Hero.tsx'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OurStory from '../components/OurStory.tsx'
import Mission from '../components/Mission.tsx'
import Reviews from '../components/Reviews.tsx'
import Buzz from "../components/TheBuzz"
import TheBuzz from '../components/TheBuzz'
import Navigation from "../components/NewNavbar/Navigation"
import Downloads from "../components/Downloads"

export default function Home() {
  return (
    <div className="">

      <Head>
        <title>BARB💇‍♂️</title>
        <link rel="icon" href="/favicon.svg" />
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
        <meta property="og:image" content="/favicon.svg" />
        <meta name="twitter:card" content="Barb is salon booking app" />
        <meta name="twitter:site" content="WWW.barb.co.in" />
        <meta name="twitter:creator" content="BARB" />
        <meta name="theme-color" content="#31fb53"/>
      </Head>


      <div>
        <Navigation/>
        <Hero />
        <Downloads/>
        <OurStory/>
        <Features />
        {/* <TheBuzz/> */}
        <Footer />
      </div>

    </div>
  )
}
