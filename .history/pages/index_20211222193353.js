import Head from 'next/head'
import Contact from '../components/Contact.tsx'
import Features from '../components/Features.tsx'
import Hero from '../components/Hero.tsx'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OurStory from '../components/OurStory.tsx'
import Mission from '../components/Mission.tsx'
import Reviews from '../components/Reviews.tsx'

export default function Home() {
  return (
    <div className="">

      <Head>
        <title>BARB💇‍♂️</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div>
        <Hero />
        <Features />
        <Contact />
        <Footer />
      </div>

    </div>
  )
}
