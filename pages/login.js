import Navbar from '../components/Navbar'
import Head from 'next/head';
import axios from 'axios';
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useRouter } from 'next/router'
import React, {useState} from 'react';
const Login = () => {
  const router = useRouter()
  const [register,setregister] = useState({
    email:"",
    password:""
});
const handleChange = (e) =>{
  const {name,value} = e.target;
  console.log(name,value);
  setregister({
      ...register,
      [name]:value
  })
}
//https://lethalslayer.000webhostapp.com/weblogin.php
const setup =  () =>{
  const {email,password} = register;
  if(password != null){
    axios.post("https://lethalslayer.000webhostapp.com/weblogin.php",register)
      .then(res => {console.log(res)
        router.push('/serviceAdd')})
  }
 else{
     alert("INVALID INPUT");
 }
}
  return (
    <div className="flex flex-col  items-center  max-w-full min-w-max w-full  py-2  from-blue-300 via-blue-600 to-blue-900 min-h-screen ">
     <Head>
        <link rel="icon" href="/favicon.svg" />
        <title>Login</title>
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
        <meta property="og:image" content="https://raw.githubusercontent.com/RishiPratap/barbweb/c450214abf3652fc7227bbdaa67ee75dcd1f6444/public/favicon.svg?token=ARKR7YPFLK4WDJIYYGU5UTDB6A2AU" />
        <meta name="twitter:title" content="Barb Salon Services"/>
        <meta name="twitter:description" content="Barb is an salon boking app"/>
        <meta name="twitter:image" content="https://raw.githubusercontent.com/RishiPratap/barbweb/c450214abf3652fc7227bbdaa67ee75dcd1f6444/public/favicon.svg?token=ARKR7YPFLK4WDJIYYGU5UTDB6A2AU"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:creator" content="BARB" />
        <meta name="theme-color" content="#31fb53"/>
      </Head>
      <div className=" bg-gradient-to-r  max-w-full flex  items-start  justify-center min-w-max w-full min-h-screen ">
        <div className="w-full max-w-lg mt-32">
          <motion.div
            className="bg-white p-3 rounded-xl "
            initial={{ y: -570 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, type: 'spring' }}
          >
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 grid space-y-5 mt-3 ">
            {console.log(register)}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  E-mail
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name='email'
                  defaultValue={register.email}
                  type="email"
                  onChange={handleChange}
                  placeholder="Enter Email"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  name='password'
                  type="password"
                  defaultValue={register.password}
                  onChange={handleChange}
                  placeholder="Enter Password"
                />
              </div>
              <div className="flex items-center justify-between">
                <motion.button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: '0px 0px 8px rgb(255 255 255)',
                  }}
                  onClick={setup}
                >
                  Sign In
                </motion.button>
                <a
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Login
