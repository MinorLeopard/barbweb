import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useRouter } from 'next/router'

const Login = () => {
  const router = useRouter()

  const emailRef = useRef()
  const passwordRef = useRef()

  return (
    <div className="flex flex-col  items-center  max-w-full min-w-max w-full  py-2  from-blue-300 via-blue-600 to-blue-900 min-h-screen ">
      <Navbar />
      <div className=" bg-gradient-to-r  max-w-full flex  items-start  justify-center min-w-max w-full min-h-screen ">
        <div class="w-full max-w-lg mt-32">
          <motion.div
            className="bg-white p-3 rounded-xl "
            initial={{ y: -570 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, type: 'spring' }}
          >
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 grid space-y-5 mt-3 ">
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="email"
                >
                  E-mail
                </label>
                <input
                  ref={emailRef}
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter Email"
                />
              </div>
              <div class="mb-6">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="password"
                >
                  Password
                </label>
                <input
                  ref={passwordRef}
                  class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter Password"
                />
              </div>
              <div class="flex items-center justify-between">
                <motion.button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: '0px 0px 8px rgb(255 255 255)',
                  }}
                  onClick={(e) => {
                    e.preventDefault()
                    console.log(emailRef.current.value)
                    console.log(passwordRef.current.value)
                    router.push('/serviceAdd')
                  }}
                >
                  Sign In
                </motion.button>
                <a
                  class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
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
