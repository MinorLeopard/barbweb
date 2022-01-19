import Image from 'next/image'
import {
  LocationMarkerIcon,
  ServerIcon,
  UserCircleIcon,
} from '@heroicons/react/solid'
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

      <section class="bg-white pt-10">
	<div class="grid md:grid-cols-3 gap-y-10 px-4 mt-20 gap-x-6 lg:px-40 md:px-">
		<div class="bg-slate-800 flex flex-col items-center py-12 ">
			<div class="mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-14 text-white w-14  fill=" none" viewBox="0 0 24 24"
					stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						d="M13 10V3L4 14h7v7l9-11h-7z" />
				</svg>
			</div>
			<h2 class="text-white text-2xl font-semibold  font-serif">0+ </h2>
      <h2 class="text-white text-2xl font-semibold mb-2 font-serif">Dow </h2>
		</div>
		<div class="bg-slate-800 flex flex-col items-center py-12 ">
			<div class="mb-4">

				<svg xmlns="http://www.w3.org/2000/svg" class="h-14 text-white w-14 fill=" none" viewBox="0 0 24 24"
					stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
			</div>
			<h2 class="text-white text-2xl font-semibold mb-2">0+</h2>
			<p class="text-white text-lg w-80 text-center">variations of passages of Lorem Ipsum available</p>
		</div>
		<div class="bg-slate-800 flex flex-col items-center py-12 ">
			<div class="mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-14 text-white w-14 fill=" none" viewBox="0 0 24 24"
					stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
						d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
				</svg>
			</div>
			<h2 class="text-white text-2xl font-semibold mb-2">Best Quality</h2>
			<p class="text-white text-lg w-80 text-center">variations of passages of Lorem Ipsum available</p>
		</div>
	</div>
</section>


 
    </div>



    </div>
  )
}

export default Hero
