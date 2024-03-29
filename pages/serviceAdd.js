import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { CameraIcon } from "@heroicons/react/outline";
import { services } from "../data";
import Head from 'next/head';
import {Fade} from 'react-awesome-reveal';
import "@fontsource/ubuntu"
const Service = () => {
  const priceRef = useRef();
  const durationRef = useRef();
  const descRef = useRef();
  const filePickRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const addImage = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(reader.result);
    };
  };

  return (
    <div className="flex flex-col   items-center justify-center  max-w-full min-w-max w-full  py-2  from-blue-300 via-blue-600 to-blue-900 min-h-screen , {} ">
       <Head>
       <link rel='preconnect' href='https://fonts.googleapis.com/css2?family=Ubuntu&display=swap'/>
      <link href='https://fonts.googleapis.com/css2?family=Ubuntu&display=swap' rel='stylesheet'/>
       <link rel="icon" href="/favicon.png" />
       <link rel="shortcut-icon" type='image/png' href='https://www.linkpicture.com/q/shortcut.png'/>
        <title>Service</title>
        <meta httpEquiv="content-language" content="en"></meta>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="keywords" content="BARB, BARB SALON SERVICES, BARB APP, BEAUTY,BARB SALON MANAGER"></meta>
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
        <meta name="theme-color" content="lightgreen"/>
        <meta name="msapplication-TileColor" content="lightgreen"/>
        <meta name="msapplication-navbutton-color" content="lightgreen"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="lightgreen"/>
        
      </Head>
      <div className=" bg-gradient-to-r  max-w-full flex flex-col md:flex-row lg:items-start  items-center  justify-evenly min-w-max w-full min-h-screen ">
        <Fade>
        <div class="w-full max-w-lg mt-10">
          <motion.div
            className="bg-white p-3 rounded-xl flex justify-center flex-col items-center "
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.4, type: "spring" }}
          >
            <p className="text-xl font-semibold t">Add Services</p>

            <div>
              {selectedFile ? (
                <motion.div initial={{ x: -200 }} animate={{ x: 0 }}>
                  <img
                    src={selectedFile}
                    onClick={() => setSelectedFile(null)}
                    alt=""
                    className="w-full object-contain cursor-pointer h-20 mt-10 "
                  />
                  <p className="text-gray-400 font-thin text-sm mt-3">
                    Click on image to remove it
                  </p>
                </motion.div>
              ) : (
                <div className="h-20 w-20 mt-3 flex items-center justify-center rounded-full bg-gray-200 cursor-pointer">
                  <CameraIcon
                    onClick={() => filePickRef.current.click()}
                    className="h-10 w-10"
                  />
                </div>
              )}
            </div>

            <div className="h-10 w-10">
              <input type="file" hidden ref={filePickRef} onChange={addImage} />
            </div>

            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-3 ">
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="price"
                >
                  ₹Price
                </label>
                <input
                  ref={priceRef}
                  class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="price"
                  type="text"
                  placeholder="Add price of your Service"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="duration"
                >
                  Enter Duration of Service(in min)
                </label>
                <input
                  ref={durationRef}
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="duration"
                  type="text"
                  placeholder="Enter Duration"
                />
              </div>

              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="duration"
                >
                  Enter Description of Service
                </label>
                <textarea
                  ref={descRef}
                  className="border bottom-2"
                  rows="5"
                  cols="50"
                />
              </div>

              <div class="flex items-center justify-between">
                <motion.button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px rgb(255 255 255)",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(priceRef.current.value);
                    console.log(durationRef.current.value);
                    console.log(descRef.current.value);
                  }}
                >
                  Add Service
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
        <div className="flex flex-col items-center justify-center mt-10 ">
          <p className="text-white mb-3">View your current services here</p>
          {services &&
            services.map((service) => {
              return (
                <motion.div
                  initial={{ x: 1000 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.4 }}
                  key={service.id}
                  className=" max-w-xl p-10 mt-10   bg-white  rounded-lg flex items-start justify-center flex-col"
                >
                  <p>{service.name}</p>
                  <p>{service.price}</p>
                  <p>{service.duration}</p>
                  <div className="w-56">
                    <p>{service.desc}</p>
                  </div>
                </motion.div>
              );
            })}
        </div>
        </Fade>
      </div>
      <div></div>
    </div>
  );
};

export default Service;
