import Image from 'next/image'
import {
  LocationMarkerIcon,
  ServerIcon,
  UserCircleIcon,
} from '@heroicons/react/solid'
const Hero = () => {
  return (
    <div>
<div className="w-screen h-screen">
  <div className="flex items-center justify-center w-full h-full bg-gray-800 p-28">
    <div className="flex h-full max-w-3xl m-4 md:m-6">
      <div className="relative transition-all duration-300 border-t border-b border-l border-r group sm:w-full md:w-1/2 hover:bg-slate-700 md:border-r-0 bg-opacity-5">

      <h1 className="pl-4 mt-6 font-serif text-6xl leading-snug text-white uppercase duration-300 transform md:pl-8 md:mt-8 group-hover:translate-x-6">Barb:<br/><span className="text-3xl">A salon booing app</span></h1>
<p className="absolute p-4 mt-10 text-xs text-white md:pl-8">Available now on playstore serving a large number of salons. Providing  ease of booking with a review and rating system</p>
      <div className="absolute right-0 z-50 flex items-center justify-center w-20 h-20 font-semibold text-black duration-300 transform translate-x-12 bg-white rounded-full cursor-pointer select-none bottom-32 md:bottom-10 group-hover:bg-black group-hover:text-white group-hover:scale-110">Get It!</div>
      </div>
    <div className="hidden bg-indigo-700 md:w-1/2 md:block">
    <Image className='h-full'
              src={require("/heropage.gif")}
              height={568}
              width={320}
            />
    </div>
  </div>
  </div>
  </div>
</div>
  )
}

export default Hero
