import CountUp from 'react-countup';
const Downloads = () => {
    return (
<section className="text-gray-600 body-font">
  <div className="container px-5 mx-auto p-10">
    <div className="flex flex-col w-full mb-10 text-center"></div>
    <div className="flex flex-wrap -m-4 text-center">
      <div className="w-full p-4 md:w-1/4 sm:w-1/2">
        <div className="px-4 py-6 border-2 border-gray-200 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="inline-block w-12 h-12 mb-3 text-indigo-500" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4m-4-5v9"></path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
          </svg>
          <h2 className="text-3xl font-medium text-gray-900 title-font"><CountUp end={100} duration={15}/>{"+"}</h2>
          <p className="leading-relaxed">Downloads</p>
        </div>
      </div>
      <div className="w-full p-4 md:w-1/4 sm:w-1/2">
        <div className="px-4 py-6 border-2 border-gray-200 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="inline-block w-12 h-12 mb-3 text-indigo-500" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 className="text-3xl font-medium text-gray-900 title-font"><CountUp end={100} duration={15}/>{"+"}</h2>
          <p className="leading-relaxed">Users</p>
        </div>
      </div>

      <div className="w-full p-4 md:w-1/4 sm:w-1/2">
        <div className="px-4 py-6 border-2 border-gray-200 rounded-lg">
        <svg version="1.1" id="Capa_1" fill="mediumslateblue" className="inline-block w-12 h-12 mb-3 text-indigo-500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 395.71 395.71" xmlSpace="preserve">
<g>
	<path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
		c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
		C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
		c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
          <h2 className="text-3xl font-medium text-gray-900 title-font"><CountUp end={100} duration={15}/>{"+"}</h2>
          <p className="leading-relaxed">Locations</p>
        </div>
      </div>

      <div className="w-full p-4 md:w-1/4 sm:w-1/2">
        <div className="px-4 py-6 border-2 border-gray-200 rounded-lg">
        <svg className="inline-block w-12 h-12 mb-3 text-indigo-500" fill="mediumslateblue" viewBox="0 0 50 50" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" overflow="inherit"><path d="M34.781 6.664h-6.951c-1.256.004-1.209 1.876 0 1.865h6.951v.957h-6.951c-1.249-.011-1.203 1.86 0 1.865h6.951v.978h-6.951c-1.249 0-1.203 1.87 0 1.865h6.951v.932h-6.951c-1.223.009-1.203 1.881 0 1.887h6.951v.934h-6.951c-1.223-.004-1.228 1.865 0 1.865h6.951v.932h-6.951c-1.223.004-1.228 1.875 0 1.866h6.951v.955h-6.951c-1.223-.011-1.228 1.858 0 1.865h6.951v.93h-6.951c-1.223-.001-1.203 1.872 0 1.866h6.951v18.159c.004 2.767 4.207 2.717 4.219 0v-42.495c-.012-1.264-1.05-2.862-2.758-2.867h-8.412c-1.256.001-1.209 1.873 0 1.865l6.951.023v.93h-6.951c-1.254-.006-1.207 1.865 0 1.866h6.951v.957zm-7.429 32.194c-.004-3.23-3.352-6.704-7.352-4.454v-12.354l-2.587-20.375c-.054-.539-.511-.666-.818-.675-.317.009-.952.136-1.021.675l-2.574 20.375v12.354c-4-2.25-7.24 1.246-7.241 4.429.001 2.832 2.181 5.158 5.131 5.151 2.972.007 5.11-2.6 5.11-5.151v-12.833h1v12.833c0 2.856 2.212 4.97 4.67 5.104-.041 1.566.47 3.8 1.432 4.686 1.128 1.04 2.471-.29 1.92-1.373-.532-1.008-1.054-1.605-.63-3.806 1.772-.82 2.956-2.546 2.96-4.586zm-16.348 2.541c-1.396-.009-2.524-1.141-2.526-2.541.002-1.399 1.13-2.536 2.526-2.544 1.386.008 2.515 1.145 2.525 2.544-.01 1.401-1.139 2.533-2.525 2.541zm8.571-2.541c.009-1.399 1.136-2.536 2.526-2.544 1.392.008 2.521 1.145 2.525 2.544-.004 1.4-1.132 2.532-2.525 2.541-1.39-.008-2.518-1.14-2.526-2.541z"/></svg>
          <h2 className="text-3xl font-medium text-gray-900 title-font"><CountUp end={100} duration={15}/>{"+"}</h2>
          <p className="leading-relaxed">Salons</p>
        </div>
      </div>

    </div>
  </div>
</section>
    )
}

export default Downloads
