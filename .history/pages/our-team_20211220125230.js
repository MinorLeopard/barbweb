import Navbar from '../components/Navbar'
import sampleImg from '../images/sample.png'
import Image from 'next/image'

const OurTeam = () => {
  const imgWidth = 320
  const imgheight = 200

  return (
<section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
    <div class="text-center pb-12">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-heading text-gray-500">
            OUR <span className="font-bold text-gray-700"> TEAM</span>
        </h1>
    </div>
    <CardDisplay/>
        <div className="flex flex-col text-white bg-[#514F59] rounded-lg ">
          <Image
            src={sampleImg}
            height={imgheight}
            width={imgWidth}
            objectFit="cover"
          />
          <div className="p-4 space-y-2">
            <div>
              <p className="font-bold">Name will come here</p>
              <p className="text-sm font-semibold text-gray-400">
                Subtitle will come here
              </p>
            </div>
            <p className="max-w-xl">
              Ea elitr ipsum amet dolor et elitr, sit et lorem accusam elitr.
              Dolor accusam ipsum tempor diam. Sit no clita at et sit dolore
              invidunt amet sed, at sed dolore nonumy stet. Diam ipsum sed duo
              dolor aliquyam sadipscing est,.
            </p>
            <div className="p-2 m-3 text-center bg-white rounded-full cursor-pointer ">
              <p className="text-blue-700">Learn More</p>
            </div>
          </div>
        </div>
        <div className="   flex flex-col text-white bg-[#514F59] rounded-lg ">
          <Image
            src={sampleImg}
            height={imgheight}
            width={imgWidth}
            objectFit="cover"
          />
          <div className="p-4 space-y-2">
            <div>
              <p className="font-bold">Name will come here</p>
              <p className="text-sm font-semibold text-gray-400">
                Subtitle will come here
              </p>
            </div>
            <p className="max-w-xl">
              Ea elitr ipsum amet dolor et elitr, sit et lorem accusam elitr.
              Dolor accusam ipsum tempor diam. Sit no clita at et sit dolore
              invidunt amet sed, at sed dolore nonumy stet. Diam ipsum sed duo
              dolor aliquyam sadipscing est,.
            </p>
            <div className="p-2 m-3 text-center bg-white rounded-full cursor-pointer ">
              <p className="text-blue-700">Learn More</p>
            </div>
          </div>
        </div>
        <div className="   flex flex-col text-white bg-[#514F59] rounded-lg ">
          <Image
            src={sampleImg}
            height={imgheight}
            width={imgWidth}
            objectFit="cover"
          />
          <div className="p-4 space-y-2">
            <div>
              <p className="font-bold">Name will come here</p>
              <p className="text-sm font-semibold text-gray-400">
                Subtitle will come here
              </p>
            </div>
            <p className="max-w-xl">
              Ea elitr ipsum amet dolor et elitr, sit et lorem accusam elitr.
              Dolor accusam ipsum tempor diam. Sit no clita at et sit dolore
              invidunt amet sed, at sed dolore nonumy stet. Diam ipsum sed duo
              dolor aliquyam sadipscing est,.
            </p>
            <div className="p-2 m-3 text-center bg-white rounded-full cursor-pointer ">
              <p className="text-blue-700">Learn More</p>
            </div>
          </div>
        </div>

        {/* <div className="bg-black h-80 w-44"></div>
        <div className="bg-black h-80 w-44"></div> */}
      </div>
    </div>
</section>
  )
}

export default OurTeam
