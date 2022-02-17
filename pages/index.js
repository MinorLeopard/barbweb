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
import { Fade } from "react-awesome-reveal";
import "@fontsource/ubuntu";
import {useState} from 'react'
export default function Home() {
  return (
    <div className="">
     <Head>
      <title>BARB | BARB SALON SERVICES | SALON MANAGER</title>
      </Head>
      <div>
      <Fade>
        <Hero />
        </Fade>
        <Fade>
        <Downloads/>
        </Fade>
        <Fade>
        <OurStory/>
        </Fade>
        <Fade>
        <Features />
        </Fade>
        {/* <TheBuzz/> */}
        <Fade>
        <Footer />
        </Fade>
      </div>

    </div>
  )
}
