import {
  LocationMarkerIcon,
  ServerIcon,
  UserCircleIcon,
} from '@heroicons/react/outline'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="max-w-full py-5  lg:mb-0  min-w-max flex flex-col w-full    items-center justify-center">
      <div className="max-w-full py-5  lg:mb-0   min-w-max flex flex-col w-full md:space-x-28  items-center justify-start md:justify-evenly md:items-start md:flex-row">
        <div className="  flex flex-col  top-10 left-24 md:items-start items-center justify-center md:justify-start">
          <div className="rounded-full h-44 w-44">
            <Image
              src={require('../images/barb_logo.png')}
              height={1200}
              width={1200}
            />
          </div>
          <div className="text-center mt-14   flex flex-col items-center md:items-start">
            <p className="text-6xl font-semibold">BARB</p>
            <p className="text-2xl font-semibold">A saloon booking app</p>
          </div>
        </div>

        <div className="mt-24 md:mt-0  flex items-center ml-20 md:ml-0">
          <div className="mt-24 mr-10">
            <Image
              src={require('../images/mobile2.png')}
              height={320}
              width={150}
            />
          </div>
          <div className="mt-0">
            <Image
              src={require('../images/mobile1.png')}
              height={320}
              width={150}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row h-[10vh] mt-56  xl:mt- mb-20 items-center justify-center xl:justify-between  xl:ml-0  ">
        <div className="cursor-pointer">
          <Image
            src={require('../images/playstore.png')}
            height={100}
            width={300}
            className="items-center flex"
          />
        </div>
        <div className="cursor-pointer">
          <Image
            src={require('../images/appstore.png')}
            height={400}
            width={400}
            layout="fixed"
          />
        </div>
      </div>

      <div className=" max-w-sm  py-10 min-w-max  xl:max-w-4xl flex flex-col xl:flex-row  w-full rounded-3xl bg-white shadow-lg justify-evenly space-y-20 xl:space-y-0 xl:h-[20vh] items-center">
        <div className="flex items-center justify-center space-x-2 ">
          <UserCircleIcon className="h-10 w-10" />
          <div className="text-start">
            <p className="font-bold text-2xl">0+</p>
            <p className="font-semibold">Downloads</p>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-2 ">
          <LocationMarkerIcon className="h-10 w-10" />
          <div className="text-start">
            <p className="font-bold text-2xl">0+</p>
            <p className="font-semibold">Locations</p>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-2 ">
          <ServerIcon className="h-10 w-10" />
          <div className="text-start">
            <p className="font-bold text-2xl">0+</p>
            <p className="font-semibold">Reviews</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

// background-color: #2a2a72;
// background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
