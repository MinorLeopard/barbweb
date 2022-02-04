import React from 'react'
import Img from 'next/image'
import "@fontsource/ubuntu"
import Logo from '../images/heroi.png'
import 'animate.css';
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
<footer className="py-6 bg-coolGray-800 text-coolGray-50 min-w-full">
	<div className="container px-6 mx-auto space-y-6 divide-y divide-coolGray-400 md:space-y-12 divide-opacity-50">
		<div className="grid grid-cols-12">
			<div className="pb-3 col-span-full md:pb-0 md:col-span-6">
				<a href="/" className="relative flex justify-center space-x-10 md:justify-start">
					<div className="relative flex items-center">
					</div>
					<div className=""><Img src={Logo} className="" alt="Logo" height="300px" width="350px"/></div>
				</a>
			</div>
			<div className="col-span-6 text-center md:text-left md:col-span-3">
				<p className="pb-1 text-lg text-red-400 font-bold">Reach Us</p>
				<ul>
					<li className='p-1'>
						<a href="https://play.google.com/store/apps/details?id=com.basic.thebarbershop" target="_blank" className="hover:text-red-400">BARB App</a>
					</li>
					<li className='p-1'>
						<a href="https://www.instagram.com/barb.app" target="_blank" className="hover:text-red-400">Instagram</a>
					</li>
					<li className='p-1'>
						<a href="https://www.linkedin.com/company/barbapp/mycompany/" target="_blank" className="hover:text-red-400">Linked In</a>
					</li>
					<li className='p-1'>
						<a href="https://twitter.com/Barb_app?s=20" target="_blank" className="hover:text-red-400">Twitter</a>
					</li>
					<li className='p-1'>
						<a href="https://www.youtube.com/channel/UCRc5iwuJSGN-_HZSW3PH1gQ" target="_blank" className="hover:text-red-400">You Tube</a>
					</li>
					<li className='p-1'>
						<a href="https://www.facebook.com/barbsalonservices" target="_blank" className="hover:text-red-400">Facebook</a>
					</li>
				</ul>
			</div>
			<div className="col-span-6 text-center md:text-left md:col-span-3">
				<p className="pb-1 text-lg text-red-400 font-bold">Category</p>
				<ul>
					<li className='p-1'>
						<a href="#" className="hover:text-red-400">BARB Salon Manager</a>
					</li>
					<li className='p-1'>
						<a href="#" className="hover:text-red-400">Instant Appointment</a>
					</li>
					<li className='p-1'>
						<a href="#" className="hover:text-red-400">BARB App</a>
					</li>
					<li className='p-1'>
						<a href="#" className="hover:text-red-400">Salon Manager</a>
					</li>
					<li className='p-1'>
						<a href="#" className="hover:text-red-400">Booking App</a>
					</li>
					<li className='p-1'>
						<a href="#" className="hover:text-red-400">Beauty</a>
					</li>
				</ul>
			</div>
		</div>
		<div className="text-1xl grid justify-center pt-6 lg:justify-between">
			<div className="space-y-5 flex flex-col self-center text-center md:block lg:col-start-1 md:space-x-5">
				<span>©2022 All rights reserved</span>
				<a href="/privacy">
					<span>Privacy policy</span>
				</a>
				<a href="/term">
					<span>Terms of service</span>
				</a>
			</div>
			<div class="flex justify-center pt-4 space-x-4 lg:pt-10 lg:col-start-1">
				<a href="mailto:barbsalonservices@gmail.com?cc=rishipratap0258@gmail.com&subject=Help%20Desk&body=Hi%20there%20I%20have%20issue%20regarding%20services%20you%20provide...." target="_top" title="Email" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-coolGray-900">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
				</a>
				<a href="https://github.com/BARBAPP" target="_blank" title="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-coolGray-900">
					<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
						<path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
					</svg>
				</a>
			</div>
		</div>
	</div>
</footer>

  )
}

export default Footer
