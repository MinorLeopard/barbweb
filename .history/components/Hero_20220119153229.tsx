import Image from 'next/image'
import {
  LocationMarkerIcon,
  ServerIcon,
  UserCircleIcon,
} from '@heroicons/react/solid'
const Hero = () => {
  return (
    <div>
<div class="h-screen w-screen">
  <div class="bg-gray-800 w-full h-full p-28 flex items-center justify-center">
    <div class="max-w-3xl flex h-full m-4 md:m-6">
      <div class="relative group sm:w-full md:w-1/2 hover:bg-slate-700 border-t border-l border-b border-r md:border-r-0 bg-opacity-5 transition-all duration-300">

      <h1 class="pl-4 md:pl-8 mt-6 md:mt-8 text-6xl text-white font-serif transform group-hover:translate-x-6 duration-300 uppercase leading-snug">Barb:<br/><span class="text-3xl">A salon booing app</span></h1>
<p class="absolute mt-10 p-4 md:pl-8 text-white text-xs">GAvailable now on playstore serving a large number of salons providing ease of booking with a review and rating system</span>
      <div class="absolute z-50 bottom-32 md:bottom-10 right-0 transform translate-x-12 flex items-center justify-center w-20 h-20 rounded-full bg-white group-hover:bg-black text-black group-hover:text-white font-semibold cursor-pointer group-hover:scale-110 duration-300 select-none">Get It!</div>
      </div>
    <div class="md:w-1/2 hidden md:block bg-indigo-700">
      <img src="https://images.unsplash.com/photo-1546621083-17f1e50980e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2800&q=80" alt="mobile payment" class="h-full" />
    </div>
  </div>
  </div>
  </div>
</div>
  )
}

export default Hero
