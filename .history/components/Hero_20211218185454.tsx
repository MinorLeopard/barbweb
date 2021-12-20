import Image from 'next/image'
const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-full py-5 lg:mb-0 min-w-max">
      <div className="flex flex-col items-center justify-start w-full max-w-full py-5 lg:mb-0 min-w-max md:space-x-28 md:justify-evenly md:items-start md:flex-row">
        <div className="flex flex-col items-center justify-center top-10 left-24 md:items-start md:justify-start">
          <div className="rounded-full h-44 w-44">
            <Image
              src={require('../images/heroi.png')}
              height={320}
              width={320}
            />
          </div>
          {/* <div className="flex flex-col items-center text-center mt-14 md:items-start">
            <p className="text-6xl font-semibold">BARB</p>
            <p className="text-2xl font-semibold">A saloon booking app</p>
          </div> */}
        </div>

        <div className="flex items-center mt-24 ml-20 md:mt-0 md:ml-0">
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
      <div className="flex flex-col xl:flex-row h-[10vh] mt-56  xl:mt-10 mb-20 items-center justify-center xl:justify-between  xl:ml-0  ">
        <div className="cursor-pointer">
          <Image
            src={require('../images/playstore.png')}
            height={100}
            width={300}
            className="flex items-center"
          />
        </div>
        {/* <div className="cursor-pointer">
          <Image
            src={require('../images/appstore.png')}
            height={400}
            width={400}
            className="flex items-center"
          />
        </div> */}
      </div>
    </div>
  )
}

export default Hero
