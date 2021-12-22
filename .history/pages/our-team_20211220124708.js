import Navbar from '../components/Navbar'
import sampleImg from '../images/sample.png'
import Image from 'next/image'

const OurTeam = () => {
  const imgWidth = 320
  const imgheight = 200

  return (
    <div className="flex flex-col items-center justify-center ">

      <p className="py-10 text-6xl font-bold">Our Team</p>
      <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto space-y-10 xl:flex-row xl:space-y-0 xl:max-w-6xl xl:space-x-20">
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

        {/* <div className="bg-black  h-80 w-44"></div>
        <div className="bg-black  h-80 w-44"></div> */}
      </div>
    </div>
  )
}

export default OurTeam
