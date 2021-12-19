const OurStory = () => {
    return (
<div className="w-screen ">
  <nav className="bg-white shadow-lg">
    <div className="items-center justify-between px-8 py-2 md:flex md:px-12">
      <div className="flex items-center justify-between"></div>
    </div>
  </nav>
  <div className="flex bg-white" >
    <div className="flex items-center px-8 text-center lg:text-left md:px-12 lg:w-1/2">
      <div>
        <h2 className="font-normal text-gray-800 text-7xl md:text-6xl">OUR <span className="font-extrabold text-gray-500">STORY</span></h2>
        <p className="text-lg text-gray-500 mt-7 md:text-base">
          Technological advancements in all industries necessitate growth of salon industry and providing people solutions for styling in an organized manner. People wait hours in queue at salons for haircuts and go to the same barbers their previous generation went to, just because they are used to them and somehow still feel that they are dissatisfied with the server. Barb wanted to offer a solution that would allow customers to choose their next salon appointment based on reviews and ratings, quality photos, browsing the catalog to learn about pricing and to take advantage of multiple offers and discounts.
          <br />

          Our company began in Patna, Bihar as a small startup covering 47 salons in Patna, providing them with the opportunity to digitize themselves. We created a platform for the common man to pick what he wants in his next appointment at a salon We are trying to revolutionize the salon industry and make user experience easy while improving the lifestyle of the people.
        </p>
      </div>
    </div>
    <div className="hidden lg:block lg:w-1/2" >
      <div className="object-cover h-full " >

        <div className="h-full bg-black opacity-25"></div>
      </div>
    </div>
  </div>
</div>

    )
}

export default OurStory
