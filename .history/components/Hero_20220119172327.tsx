import Image from 'next/image'
import {
  LocationMarkerIcon,
  ServerIcon,
  UserCircleIcon,
} from '@heroicons/react/solid'
import Downloads from './Downloads'
const Hero = () => {
  return (
    <div>
<div className="w-screen h-screen">
  <div className="flex items-center justify-center w-full h-full bg-gray-800 p-28">
    <div className="flex h-full max-w-3xl m-4 md:m-6">
      <div className="relative transition-all duration-300 border-t border-b border-l border-r group sm:w-full md:w-1/2 hover:bg-slate-700 md:border-r-0 bg-opacity-5">


            <Image
              src={require('../images/heroi.png')}
              height={500}
              width={500}
            />
            <div className="-mt-8 cursor-pointer">
              <Image
                src={require('../images/playstore.png')}
                height={90}
                width={250}
                className="flex items-center "
              />
            </div>
          </div>
        </div>

        <div className="flex items-center mt-24 ml-20 md:mt-0 md:ml-0">
          <div className="mt-24 mr-10">
            <Image className='hidden md:block'
              src={require('../images/phoonelogo.png')}
              height={430}
              width={210}
            />
          </div>
          <div className="mt-0">
            <Image
              src={require('../images/mobile1.png')}
              height={430}
              width={210}
            />
          </div>
        </div>
      </div>


 
    </div>




    </div>

  )
}

export default Hero
