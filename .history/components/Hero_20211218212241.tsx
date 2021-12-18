import Image from 'next/image'
import {LocationMarkerIcon, ServerIcon, UserCircleIcon,} from "@heroicons/react/solid"
const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-full py-5 lg:mb-0 min-w-max">
      <div className="flex flex-col items-center justify-start w-full max-w-full py-5 lg:mb-0 min-w-max md:space-x-28 md:justify-evenly md:items-start md:flex-row">
        <div className="flex flex-col items-center justify-center top-10 left-24 md:items-start md:justify-start">
          <div className="mt-5 rounded-full">
            <Image
              src={require('../images/heroi.png')}
              height={500}
              width={500}
            />
          </div>
        </div>

        <div className="flex items-center mt-24 ml-20 md:mt-0 md:ml-0">
          <div className="mt-24 mr-10">
            <Image
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
      <div className="flex flex-col xl:flex-row h-[10vh] mt-56  xl:mt-10 mb-20 xl:justify-between  xl:ml-0  ">
        <div className="cursor-pointer">
          <Image
            src={require('../images/playstore.png')}
            height={100}
            width={300}
            className="flex items-center"
          />
        </div>
        <div className=" max-w-sm  py-10 min-w-max  xl:max-w-4xl flex flex-col xl:flex-row  w-full rounded-3xl bg-white shadow-lg justify-evenly space-y-20 xl:space-y-0 xl:h-[20vh] items-center">
        <div className="flex items-center justify-center space-x-2 ">
          <UserCircleIcon className="w-10 h-10" />
          <div className="text-start">
            <p className="text-2xl font-bold">0+</p>
            <p className="font-semibold">Downloads</p>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-2 ">
          <LocationMarkerIcon className="w-10 h-10" />
          <div className="text-start">
            <p className="text-2xl font-bold">0+</p>
            <p className="font-semibold">Locations</p>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-2 ">
          <ServerIcon className="w-10 h-10" />
          <div className="text-start">
            <p className="text-2xl font-bold">0+</p>
            <p className="font-semibold">Reviews</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
