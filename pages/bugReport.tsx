import Head from 'next/head';

const BugReport = () => {
    return (
        
        <div>
             <Head>
       
        <link rel="icon" href="/favicon.svg" />
        <title>Bugs Report</title>
        <meta http-equiv="content-language" content="en"></meta>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="keywords" content="BARB, BARB SALON SERVICES, BARB APP, BEAUTY"></meta>
        <meta name="author" content="BARB"></meta>
        <meta name="publisher" content="BARB"></meta>
        <meta name="copyright" content="BARB"></meta>
        <meta name="description" content="Barb is salon booking app"></meta>
        <meta name="page-topic" content="Media"></meta>
        <meta name="page-type" content="Beauty"></meta>
        <meta name="audience" content="Everyone"></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta property="og:title" content="BARB APP" />
        <meta property="og:description" content="Barb is salon booking app" />
        <meta property="og:image" content="https://www.linkpicture.com/q/BARB_1.png" />
        <meta name="twitter:title" content="Barb Salon Services"/>
        <meta name="twitter:description" content="Barb is an salon boking app"/>
        <meta name="twitter:image" content="https://www.linkpicture.com/q/BARB_1.png"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:creator" content="BARB" />
        <meta name="theme-color" content="indigo"/>
        <meta name="msapplication-TileColor" content="indigo"/>
        <meta name="msapplication-navbutton-color" content="indigo"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="indigo"/>
      </Head>
            <div className="pt-2 font-mono bg-white ">

            <div className="w-full max-w-2xl p-6 mx-auto inputs">
                <h2 className="text-2xl text-gray-900">Bug Report</h2>
                <form className="pt-4 mt-6 border-t border-gray-400"/>
                    <div className='flex flex-wrap mb-6 -mx-3'>
                        <div className='w-full px-3 mb-6 md:w-full'>
                            <label className='block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase'>email address</label>
                            <input className='block w-full px-4 py-3 leading-tight text-gray-700 bg-white border border-gray-400 rounded-md shadow-inner appearance-none focus:outline-none focus:border-gray-500' id='grid-text-1' type='text' placeholder='Enter email'  required/>
                        </div>
                         <div className='w-full px-3 mb-6 md:w-full'>
                            <label className='block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase'>pick a cotegory</label>
                            <div className="relative flex-shrink inline-block w-full">
                                <select className="block w-full px-4 py-2 pr-8 text-gray-600 bg-white border border-gray-400 rounded shadow-inner appearance-none">
                                  <option>---Choose a Problem---</option>
                                  <option>Server Problem</option>
                                    <option>Finance</option>
                                    <option>Privacy Issue</option>
                                    <option>Data Issue</option>
                                    <option>Other</option>

                                </select>
                                <div className="absolute top-0 right-0 flex items-center px-2 mt-3 text-gray-600 pointer-events-none">
                                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                        <div className='w-full px-3 mb-6 md:w-full '>
                            <label className='block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase'>Explain the bug</label>
                            <textarea  placeholder="bug goes here"className="px-2 py-1 text-gray-900 bg-gray-200 border border-gray-400 rounded-md shadow-sm appearance-none "></textarea>
                        </div>
                       
                        <div className='w-full px-3 mb-6 md:w-full'>
                            <label className='block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase'>Upload Photo (optional)</label>
                            <input type="file" id="myFile" name="filename"/>
                            <br/>
                            <input type="submit"/>
                        <div className="w-full pt-4 border-t border-gray-400 personal">
                            <h2 className="text-2xl text-gray-900">Personal info:</h2>
                            <div className="flex items-center justify-between mt-4">
                                <div className='w-full px-3 mb-6 md:w-1/2'>
                                    <label className='block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase' >first name</label>
                                    <input className='block w-full px-4 py-3 leading-tight text-gray-700 bg-white border border-gray-400 rounded-md shadow-inner appearance-none focus:outline-none focus:border-gray-500' type='text'  required/>
                                </div>
                                <div className='w-full px-3 mb-6 md:w-1/2'>
                                    <label className='block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase' >last name</label>
                                    <input className='block w-full px-4 py-3 leading-tight text-gray-700 bg-white border border-gray-400 rounded-md shadow-inner appearance-none focus:outline-none focus:border-gray-500' type='text'  required/>
                                </div>
                            </div>
                            <div className='w-full px-3 mb-6 md:w-full'>
                                <label className='block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase'>PHONE NUMBER</label>
                                <input className='block w-full px-4 py-3 leading-tight text-gray-700 bg-white border border-gray-400 rounded-md shadow-inner appearance-none focus:outline-none focus:border-gray-500' type='text'  required />
                            </div>
                            <div className="flex justify-end">
                                <button className="px-2 py-1 mr-3 text-gray-900 bg-gray-200 border border-gray-400 rounded-md shadow-sm appearance-none" type="submit">save changes</button>
                            </div>
                        </div>
                    </div>
                <form/>
            </div>
        </div>
    </div>
</div>


    )
}

export default BugReport