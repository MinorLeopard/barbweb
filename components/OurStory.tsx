// const OurStory = () => {
//     return (
// <div className="inline-block w-screen">
//   <nav className="bg-white shadow-lg">
//     <div className="items-center justify-between px-8 py-2 md:flex md:px-12">
//       <div className="flex items-center justify-between"></div>
//     </div>
//   </nav>
//   <div className="flex bg-white" >
//     <div className="flex items-center px-8 text-center lg:text-left md:px-12 lg:w-1/2">
//       <div>
//         <h2 className="font-normal text-gray-800 text-7xl md:text-6xl">OUR <span className="font-extrabold text-gray-500">STORY</span></h2>
//         <p className="text-lg text-gray-500 mt-7 md:text-base">
//           Technological advancements in all industries necessitate growth of salon industry and providing people solutions for styling in an organized manner. People wait hours in queue at salons for haircuts and go to the same barbers their previous generation went to, just because they are used to them and somehow still feel that they are dissatisfied with the server. Barb wanted to offer a solution that would allow customers to choose their next salon appointment based on reviews and ratings, quality photos, browsing the catalog to learn about pricing and to take advantage of multiple offers and discounts.
//           <br />

//           Our company began in Patna, Bihar as a small startup covering 47 salons in Patna, providing them with the opportunity to digitize themselves. We created a platform for the common man to pick what he wants in his next appointment at a salon and trying to revolutionize the salon industry and make user experience easy while improving the lifestyle of the people.
//         </p>
//       </div>
//     </div>
//     <div className="hidden lg:block lg:w-1/2" >
//       <div className="object-cover h-full " >

//         <div className="h-full bg-black opacity-25"></div>
//       </div>
//     </div>
//   </div>
// </div>

//     )
// }

// export default OurStory

const OurStory = () => {
    return (

<div className="relative h-screen overflow-hidden bg-slate-800">
    <img src="images/bg-story.jpeg" className="absolute object-cover w-full h-full" alt="banner"/>
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
    )}


export default OurStory

