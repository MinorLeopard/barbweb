const OurStory = () => {
    return (

<div className="relative h-screen overflow-hidden bg-slate-800">
    <img src="images/bg-story.jpeg" className="absolute object-cover w-full h-full"/>
    <div className="absolute inset-0 bg-black opacity-25">
    </div>
    <div className="container relative z-10 flex items-center w-4/5 py-16 mx-auto my-24 border-4 border-white rounded-lg md:my-32">
        <div className="relative z-10 flex flex-col items-center justify-between w-full">
            <p className="flex flex-col items-center text-6xl font-extrabold text-center text-white md:text-8xl">
                OUR STORY
            </p>
            <p className="flex flex-col items-center max-w-lg mt-6 text-lg font-extrabold text-center text-white">
               Our company began in Patna, Bihar as a small startup covering 47 salons in Patna, providing them with the opportunity to digitize themselves. We created a platform for the common man to pick what he wants in his next appointment at a salon and trying to revolutionize the salon industry and make user experience easy while improving the lifestyle of the people.
            </p>
            <a href="#" className="block px-4 py-3 mt-10 text-lg font-bold text-white uppercase bg-gray-800 hover:bg-gray-900 animate-bounce">
                join us 
            </a>
        </div>
    </div>
</div>

    )
}

export default OurStory
