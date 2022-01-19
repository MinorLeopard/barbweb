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
    <div className="flex flex-col items-center justify-center w-full max-w-full py-5 mb-10 bg-gray-200 lg:mb-0 min-w-max">
      <div className="flex flex-col items-center justify-start w-full max-w-full py-5 lg:mb-0 min-w-max md:space-x-28 md:justify-evenly md:items-start md:flex-row">
        <div className="flex flex-col items-center justify-center top-10 left-24 md:items-start md:justify-start">
          <div className="flex flex-col mt-5">

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
