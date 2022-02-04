import Image from 'next/image'
import Head from 'next/head'
import "@fontsource/ubuntu"
import Typewriter from 'typewriter-effect';
import {
  LocationMarkerIcon,
  ServerIcon,
  UserCircleIcon,
} from '@heroicons/react/solid'
import Downloads from './Downloads'
import Link from 'next/link'
const Hero = () => {
  return (

        <div>
          <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet"></link>
          </Head>
    <div className="w-screen h-screen">
      <div className="flex items-center justify-center w-full h-full bg-gray-800 p-10">
        <div className="flex h-full max-w-3xl m-4 md:m-6">
          <div className="relative transition-all duration-300 border-t border-b border-l border-r group sm:w-full md:w-1/2 hover:bg-slate-700 md:border-r-0 bg-opacity-5">
    
          <h1 className="pl-10 pt-10 text-4xl text-white uppercase duration-300 transform md:pl-8 md:mt-8">Barb<br/><span className="text-3xl">A salon booing app</span></h1>
    <p className="absolute p-8 pt-3 text-2xl text-green-600">
      <Typewriter
       options={{
      strings: ['Available now on playstore serving a large number of salons providing ease of booking with a review and rating system'],
      autoStart: true,
      loop: true,
      }}/>
      </p>
          <div className="absolute right-0 z-50 flex items-center justify-center w-20 h-20 font-semibold text-black duration-300 transform translate-x-12 bg-white rounded-full cursor-pointer select-none bottom-32 md:bottom-10 group-hover:bg-black group-hover:text-white group-hover:scale-110"><Link href="https://play.google.com/store/apps/details?id=com.basic.thebarbershop">Get It!</Link></div>

          </div>
        <div className="hidden bg-indigo-700 md:w-1/2 md:block">
          <img src="https://images.unsplash.com/photo-1546621083-17f1e50980e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2800&q=80" alt="mobile payment" className="h-full" />
        </div>
      </div>
    </div>
    </div>
    </div>

  )
}

export default Hero
