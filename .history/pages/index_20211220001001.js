import Head from 'next/head'
import Contact from '../components/Contact.tsx'
import Features from '../components/Features.tsx'
import Hero from '../components/Hero.tsx'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OurStory from '../components/OurStory.tsx'
import Mission from '../components/Mission.tsx'

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full max-w-full min-h-screen py-2 min-w-max">
      <Head>
        <title>BARB💇‍♂️</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <OurStory/>
      <Features />
      <Mission/>
      <Footer />
      <Reviews />
    </div>
  )
}
