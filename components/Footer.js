import React from 'react'
import Image from 'next/image'
import AppStore from '../images/AppStore.png'
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
      <div className="h-full w-full pt-10 lg:pb-8 flex  flex-row lg:justify-between">
        {/* layout of structure */}

        <div className="ml-8">
          {' '}
          {/* left half of the footer */}
          <h1 className="font-semibold text-2xl lg:text-4xl lg:ml-7">
            Plan. Focus. Optimize.
          </h1>
          <p className="mt-6 lg:ml-7 lg:mt-6 text-lg">
            Give yourself the freedom to focus
          </p>
          <Image src={AppStore} width={200} height={200} /> {/*Image*/}
          <div className="flex flex-row gap-6 lg:ml-7 -mt-6">
            {' '}
            {/* social media handles */}
            <FaFacebook fontSize="25" />
            <FaLinkedin fontSize="25" />
            <FaTwitter fontSize="25" />
            <FaInstagramSquare fontSize="25" />
          </div>
          <div className="flex flex-col lg:flex-row gap-4 lg:ml-7 mt-8">
            {' '}
            {/* bottom links */}
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
            <p>Support</p>
          </div>
        </div>

        <div className="w-80 ml-20 text-white mr-8 lg:w-2/6 lg:mr-8 lg:ml-0">
          {' '}
          {/* right half of the footer */}
          <p className="font-semibold text-2xl lg:text-4xl">
            Get Great News from Us
          </p>
          <p className="mt-6 text-lg">
            We value <span className="underline font-semibold">privacy</span>{' '}
            and would never spam you! The only reason we will ever send anything
            is to share important updates about Seque.
          </p>
          <p className="mt-20 text-lg">E-mail</p>
          <div className="mt-5 flex flex-row items-center bg-white lg:w-80">
            <input
              placeholder="E.g. ziggy@space.com"
              className="p-5 pr-0 max-w-sm"
            />
            <p className="w-auto bg-purple-400 p-3 rounded-md -ml-6 cursor-pointer sm:ml-3">
              Subscribe
            </p>
          </div>
        </div>
      </div>
      <p className="text-center mt-3 text-xs">
        Copyright © 2019 Semi Serious Labs P.C. All rights reserved.
      </p>{' '}
      {/* bottom copyright text*/}
    </div>
  )
}

export default Footer
