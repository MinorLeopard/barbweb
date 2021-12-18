import React from 'react'
import Image from 'next/image'
// import AppStore from '../images/AppStore.png'
import {
  FaFacebook,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa'

// Footer component
function Footer() {
  return (
    <div className="mt-72 xl:mt-20 max-w-[1420px] rounded-t-3xl    flex flex-col justify-center items-center  bg-footerBg pb-5 text-white h-full   w-full">
      {/* outer structure */}
      <div className="flex flex-row w-full h-full pt-10 lg:pb-8 lg:justify-between">
        {/* layout of structure */}

        <div className="ml-8">
          {' '}
          {/* left half of the footer */}
          <h1 className="text-2xl font-semibold lg:text-4xl lg:ml-7">
            Plan. Focus. Optimize.
          </h1>
          <p className="mt-6 text-lg lg:ml-7 lg:mt-6">
            Give yourself the freedom to focus
          </p>
          <Image src={AppStore} width={200} height={200} /> {/*Image*/}
          <div className="flex flex-row gap-6 -mt-6 lg:ml-7">
            {' '}
            {/* social media handles */}
            <FaFacebook fontSize="25" />
            <FaLinkedin fontSize="25" />
            <FaTwitter fontSize="25" />
            <FaInstagramSquare fontSize="25" />
          </div>
          <div className="flex flex-col gap-4 mt-8 lg:flex-row lg:ml-7">
            {' '}
            {/* bottom links */}
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
            <p>Support</p>
          </div>
        </div>

        <div className="ml-20 mr-8 text-white w-80 lg:w-2/6 lg:mr-8 lg:ml-0">
          {' '}
          {/* right half of the footer */}
          <p className="text-2xl font-semibold lg:text-4xl">
            Get Great News from Us
          </p>
          <p className="mt-6 text-lg">
            We value <span className="font-semibold underline">privacy</span>{' '}
            and would never spam you! The only reason we will ever send anything
            is to share important updates about Seque.
          </p>
          <p className="mt-20 text-lg">E-mail</p>
          <div className="flex flex-row items-center mt-5 bg-white lg:w-80">
            <input
              placeholder="E.g. ziggy@space.com"
              className="max-w-sm p-5 pr-0"
            />
            <p className="w-auto p-3 -ml-6 bg-purple-400 rounded-md cursor-pointer sm:ml-3">
              Subscribe
            </p>
          </div>
        </div>
      </div>
      <p className="mt-3 text-xs text-center">
        Copyright © 2019 Semi Serious Labs P.C. All rights reserved.
      </p>{' '}
      {/* bottom copyright text*/}
    </div>
  )
}

export default Footer
