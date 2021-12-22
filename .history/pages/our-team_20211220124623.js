import Navbar from '../components/Navbar'
import sampleImg from '../images/sample.png'
import Image from 'next/image'

const OurTeam = () => {
  const imgWidth = 320
  const imgheight = 200

  return (
    <div className=" flex flex-col items-center justify-center ">
      <Navbar />
      <p className="py-10 font-bold text-6xl">Our Team</p>
      <div className="flex  flex-col xl:flex-row max-w-sm space-y-10 xl:space-y-0  xl:max-w-6xl mx-auto items-center w-full justify-center xl:space-x-20">
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
              <p className="font-semibold text-sm text-gray-400">
                Subtitle will come here
              </p>
            </div>
            <p className="max-w-xl">
              Ea elitr ipsum amet dolor et elitr, sit et lorem accusam elitr.
              Dolor accusam ipsum tempor diam. Sit no clita at et sit dolore
              invidunt amet sed, at sed dolore nonumy stet. Diam ipsum sed duo
              dolor aliquyam sadipscing est,.
            </p>
            <div className="text-center bg-white p-2 m-3 rounded-full cursor-pointer ">
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
              <p className="font-semibold text-sm text-gray-400">
                Subtitle will come here
              </p>
            </div>
            <p className="max-w-xl">
              Ea elitr ipsum amet dolor et elitr, sit et lorem accusam elitr.
              Dolor accusam ipsum tempor diam. Sit no clita at et sit dolore
              invidunt amet sed, at sed dolore nonumy stet. Diam ipsum sed duo
              dolor aliquyam sadipscing est,.
            </p>
            <div className="text-center bg-white p-2 m-3 rounded-full cursor-pointer ">
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
              <p className="font-semibold text-sm text-gray-400">
                Subtitle will come here
              </p>
            </div>
            <p className="max-w-xl">
              Ea elitr ipsum amet dolor et elitr, sit et lorem accusam elitr.
              Dolor accusam ipsum tempor diam. Sit no clita at et sit dolore
              invidunt amet sed, at sed dolore nonumy stet. Diam ipsum sed duo
              dolor aliquyam sadipscing est,.
            </p>
            <div className="text-center bg-white p-2 m-3 rounded-full cursor-pointer ">
              <p className="text-blue-700">Learn More</p>
            </div>
          </div>
        </div>

        {/* <div className=" h-80 w-44 bg-black"></div>
        <div className=" h-80 w-44 bg-black"></div> */}
      </div>
    </div>
  )
}

export default OurTeam
