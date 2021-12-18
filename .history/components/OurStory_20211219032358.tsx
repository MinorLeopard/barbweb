const OurStory = () => {
    return (
<div class="w-full">
  <nav class="bg-white shadow-lg">
    <div class="md:flex items-center justify-between py-2 px-8 md:px-12">
      <div class="flex justify-between items-center"></div>
    </div>
  </nav>
  <div class="flex bg-white" style="height:600px;">
    <div class="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
      <div>
        <h2 class="text-5xl font-normal text-gray-800 md:text-4xl">OUR <span class="text-gray-500 font-extrabold">STORY</span></h2>
        <p class="mt-7 text-lg text-gray-500 md:text-base">
          Technological advancements in all industries necessitate growth of salon industry and providing people solutions for styling in an organized manner. People wait hours in queue at salons for haircuts and go to the same barbers their previous generation went to, just because they are used to them and somehow still feel that they are dissatisfied with the server. Barb wanted to offer a solution that would allow customers to choose their next salon appointment based on reviews and ratings, quality photos, browsing the catalog to learn about pricing and to take advantage of multiple offers and discounts.
          <br />

          Our company began in Patna, Bihar as a small startup covering 47 salons in Patna, providing them with the opportunity to digitize themselves. We created a platform for the common man to pick what he wants in his next appointment at a salon We are trying to revolutionize the salon industry and make user experience easy while improving the lifestyle of the people.
        </p>
      </div>
    </div>
    <div class="hidden lg:block lg:w-1/2" style="clip-path:polygon(10% 0, 100% 0%, 100% 100%, 0 100%)">
      <div class="h-full object-cover" style="background-image: url(https://unsplash.com/photos/EW_rqoSdDes">
        <div class="h-full bg-black opacity-25"></div>
      </div>
    </div>
  </div>
</div>

    )
}

export default OurStory
