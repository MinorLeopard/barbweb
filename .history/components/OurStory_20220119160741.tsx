const OurStory = () => {
    return (

<div class="bg-indigo-900 relative overflow-hidden h-screen">
    <img src="/images/landscape/7.svg" class="absolute h-full w-full object-cover"/>
    <div class="inset-0 bg-black opacity-25 absolute">
    </div>
    <div class="container border-4 border-white rounded-lg mx-auto w-4/5 relative z-10 flex items-center py-16 my-24 md:my-32">
        <div class="w-full flex flex-col items-center justify-between relative z-10">
            <p class="flex flex-col items-center font-extrabold text-6xl text-center md:text-8xl text-white">
                OUR STORY
            </p>
            <p class="flex flex-col max-w-lg text-center items-center font-extrabold text-lg mt-6 text-white">
               Our company began in Patna, Bihar as a small startup covering 47 salons in Patna, providing them with the opportunity to digitize themselves. We created a platform for the common man to pick what he wants in his next appointment at a salon and trying to revolutionize the salon industry and make user experience easy while improving the lifestyle of the people.
            </p>
            <a href="#" class="block bg-gray-800 hover:bg-gray-900 py-3 px-4 text-lg text-white font-bold uppercase mt-10 animate-bounce">
                join us 
            </a>
        </div>
    </div>
</div>

    )
}

export default OurStory
