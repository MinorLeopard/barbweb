import Image from 'next/image'
const Cities = () => {
    return (
        <>
<div className="w-screen mt-10">
                <nav className="bg-white shadow-lg">
                    <div className="items-center justify-between px-8 py-2 md:flex md:px-12">
                        <div className="flex items-center justify-between"></div>
                    </div>
                </nav>
                <div className="flex bg-white">
                    <div className="flex items-center px-8 text-center lg:text-left md:px-12 lg:w-1/2">
                        <div>
                            <h2 className="font-normal text-gray-800 text-7xl md:text-6xl">OUR <span className="font-extrabold text-gray-500">PRESENCE</span></h2>
                            <p className="text-lg text-gray-500 mt-7 md:text-base">
                                BARB originally started in 2018 in Patna pre pandemic . This time we look forward to launch in multiple cities pan India . Starting intially with 5 cities and targetting to reach <b>15</b> cities till April 2021
                                <br />

                            </p>
                            <div className="relative w-10/12 py-20 mx-auto -mt-10 md:w-7/12 lg:6/12">
      <div className="border-l-2 ">
        
        <div className="relative flex flex-col items-center px-6 py-4 mb-10 ml-10 space-y-4 text-white transition transform bg-gray-600 rounded cursor-pointer hover:-translate-y-2 md:flex-row md:space-y-0">

          <div className="absolute z-10 w-5 h-5 mt-2 transform bg-gray-600 rounded-full -left-10 -translate-x-2/4 md:mt-0"></div>


          <div className="absolute z-0 w-10 h-1 bg-gray-600 -left-10"></div>


          <div className="flex-auto">
            
            <h1 className="text-xl font-bold">Chennai,Tamil Nadu</h1>
            
          </div>
         
        </div>


        <div className="relative flex flex-col items-center px-6 py-4 mb-10 ml-10 space-y-4 text-white transition transform bg-gray-400 rounded cursor-pointer hover:-translate-y-2 md:flex-row md:space-y-0">

          <div className="absolute z-10 w-5 h-5 mt-2 transform bg-gray-400 rounded-full -left-10 -translate-x-2/4 md:mt-0"></div>

          <div className="absolute z-0 w-10 h-1 bg-gray-400 -left-10"></div>

          <div className="flex-auto">
            
            <h1 className="text-xl font-bold">Manipal, Karnataka</h1>
            
          </div>
         
        </div>

        <div className="relative flex flex-col items-center px-6 py-4 mb-10 ml-10 space-y-4 text-white transition transform bg-gray-600 rounded cursor-pointer hover:-translate-y-2 md:flex-row md:space-y-0">

          <div className="absolute z-10 w-5 h-5 mt-2 transform bg-gray-600 rounded-full -left-10 -translate-x-2/4 md:mt-0"></div>

          <div className="absolute z-0 w-10 h-1 bg-gray-600 -left-10"></div>

          <div className="flex-auto">
            
            <h1 className="text-xl font-bold">Gurgaon, Delhi NCR</h1>
            
          </div>
         
        </div>


        <div className="relative flex flex-col items-center px-6 py-4 mb-10 ml-10 space-y-4 text-white transition transform bg-gray-400 rounded cursor-pointer hover:-translate-y-2 md:flex-row md:space-y-0">
          
          <div className="absolute z-10 w-5 h-5 mt-2 transform bg-gray-400 rounded-full -left-10 -translate-x-2/4 md:mt-0"></div>


          <div className="absolute z-0 w-10 h-1 bg-gray-400 -left-10"></div>


          <div className="flex-auto">
           
            <h1 className="text-xl font-bold">Kolkatta, West Bengal</h1>
            
          </div>
         
        </div>


        <div className="relative flex flex-col items-center px-6 py-4 mb-10 ml-10 text-white transition transform bg-gray-600 rounded cursor-pointer hover:-translate-y-2 md:flex-row">

          <div className="absolute z-10 w-5 h-5 -mt-2 transform bg-gray-600 rounded-full -left-10 -translate-x-2/4 md:mt-0"></div>

          <div className="absolute z-0 w-10 h-1 bg-gray-600 -left-10"></div>


          <div className="flex-auto">
            <h1 className="text-xl font-bold">Patna,Bihar</h1>
            
          </div>
         
        </div>
      </div>
    </div>
                        </div>
                    </div>
                    <div className="hidden lg:block lg:w-1/2">
                        <div className="object-cover ">
                            <div>
                            <Image className='mt-20 mr-0'
                                src={require('../images/ggn.gif')}
                                height={1000}
                                width={1200} />
                                </div>


                        </div>
                    </div>
                </div>
            </div>
            </>

    )
}

export default Cities
