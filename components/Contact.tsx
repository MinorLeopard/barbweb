const Contact = () => {
  return (
    <div className="flex flex-col  justify-center items-center  mt-56 lg:mt-0">
      <p className="text-4xl font-semibold mb-14">Contact Us</p>

      {/* Containers are inside these */}
      <div className="w-full flex flex-col lg:flex-row  justify-evenly items-center lg:items-center ">
        <div className=" max-w-6xl bg-[#344955] rounded-lg h-[70vh] w-[400px] lg:ml-10 min-w-max">
          {/* Green box */}
        </div>

        {/* form part  */}

        <div className=" max-w-sm w-full min-w-max mt-10 ">
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Full Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Full Name"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="email"
                  placeholder="Email-id"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 flex justify-between ">
                <div>
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Phone Number
                  </label>
                  <input
                    className=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    placeholder="Phone Number"
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Company Name
                  </label>
                  <input
                    className=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    placeholder="Name of your Company"
                  />
                </div>
              </div>
            </div>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Message
            </label>
            <div className="flex flex-wrap -mx-3 mb-2">
              <textarea
                className=" w-full h-48 border border-3"
                placeholder="Add your message here"
                id="textarea"
              />
            </div>
            <div className="w-full flex justify-center items-center mt-5 ">
              <div className="bg-black p-3 rounded-full w-32 flex items-center justify-center ">
                <button className="text-white font-semibold">SUBMIT</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
