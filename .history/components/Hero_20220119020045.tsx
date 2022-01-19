import Image from 'next/image'
import {
  LocationMarkerIcon,
  ServerIcon,
  UserCircleIcon,
} from '@heroicons/react/solid'
const Hero = () => {
  return (
    <div>
    <div classNameName="flex flex-col items-center justify-center w-full max-w-full py-5 mb-10 bg-gray-200 lg:mb-0 min-w-max">
      <div classNameName="flex flex-col items-center justify-start w-full max-w-full py-5 lg:mb-0 min-w-max md:space-x-28 md:justify-evenly md:items-start md:flex-row">
        <div classNameName="flex flex-col items-center justify-center top-10 left-24 md:items-start md:justify-start">
          <div classNameName="flex flex-col mt-5">

            <Image
              src={require('../images/heroi.png')}
              height={500}
              width={500}
            />
            <div classNameName="-mt-8 cursor-pointer">
              <Image
                src={require('../images/playstore.png')}
                height={90}
                width={250}
                classNameName="flex items-center "
              />
            </div>
          </div>
        </div>

        <div classNameName="flex items-center mt-24 ml-20 md:mt-0 md:ml-0">
          <div classNameName="mt-24 mr-10">
            <Image classNameName='hidden md:block'
              src={require('../images/phoonelogo.png')}
              height={430}
              width={210}
            />
          </div>
          <div classNameName="mt-0">
            <Image
              src={require('../images/mobile1.png')}
              height={430}
              width={210}
            />
          </div>
        </div>
      </div>

      <section className="pt-10 bg-white">
	<div className="grid px-4 mt-20 md:grid-cols-3 gap-y-10 gap-x-6 lg:px-40 md:px-">
		<div className="flex flex-col items-center py-12 bg-slate-800 ">
			<div className="mb-4">
          <UserCircleIcon classNameName="w-10 h-10" />
			</div>
            <div className="text-center">
              <p className="text-5xl font-bold">0+</p>
              <p className="text-3xl font-semibold">Downloads</p>
            </div>
		</div>
		<div className="flex flex-col items-center py-12 bg-slate-800 ">
			<div className="mb-4">
				<LocationMarkerIcon className="w-10 h-10" />
			</div>
 <div className="text-center">
              <p className="text-5xl font-bold">0+</p>
              <p className="text-3xl font-semibold ">Locations</p>
            </div>
		</div>
		<div className="flex flex-col items-center py-12 bg-slate-800 ">
			<div className="mb-4">
     <ServerIcon className="w-10 h-10" />
			</div>
		<p className="text-5xl font-bold">0+</p>
    <p className="text-3xl font-semibold">Salons</p>
		</div>
	</div>
</section>

 
    </div>



    </div>
  )
}

export default Hero
