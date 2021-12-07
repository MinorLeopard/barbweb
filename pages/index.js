import Head from 'next/head'
import Contact from '../components/Contact.tsx'
import Features from '../components/Features.tsx'
import Footer from '../components/Footer'
import Hero from '../components/Hero.tsx'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen py-2">
      <Head>
        <title>BARB💇‍♂️</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Features />
      <Contact />
    </div>
  )
}
