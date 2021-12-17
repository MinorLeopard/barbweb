import { MenuIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import Link from 'next/link'
import Dropdown from './Dropdown.tsx'

const Navbar = () => {
  const [drop, setDrop] = useState(false)
  return (
    <nav className="p-3 sticky bg-white mb-2 z-[99] top-0  flex  max-w-full min-w-max w-full justify-between md:justify-evenly items-center   ">
      <div>
        <Link href="/">
          <p className="text-4xl cursor-pointer">BARB 💇‍♂️</p>
        </Link>
      </div>
      <div>
        <div className="flex flex-col md:hidden">
          <MenuIcon
            onClick={() => {
              if (drop == true) {
                setDrop(false)
              } else {
                setDrop(true)
              }
            }}
            className="h-7 w-7 md:hidden cursor-pointer transform transition-all"
          />
          <div className="">{drop ? <Dropdown /> : null}</div>
        </div>

        <ul className="space-x-5 hidden md:flex">
          <a href="">
            <li className="transform transition-all duration-150 hover:scale-105 hover:underline">
              Our team
            </li>
          </a>
          <a href="">
            <li className="transform transition-all duration-150 hover:scale-105 hover:underline">
              Cities
            </li>
          </a>
          <a href="">
            <li className="transform transition-all duration-150 hover:scale-105 hover:underline">
              Career
            </li>
          </a>
          <a href="">
            <li className="transform transition-all duration-150 hover:scale-105 hover:underline">
              Press
            </li>
          </a>
          <a href="">
            <li className="transform transition-all duration-150 hover:scale-105 hover:underline">
              Report
            </li>
          </a>

          <a href="">
            <li className="transform transition-all duration-150 hover:scale-105 hover:underline">
              Contact us
            </li>
          </a>
        </ul>
      </div>

      <div className="hidden xl:flex">
        <a href="/login">
          <p className="transform transition-all duration-150 hover:scale-105 hover:underline">
            Admin ?
          </p>
        </a>
      </div>
    </nav>
  )
}

export default Navbar

// <div className=" max-w-sm space-y-14 py-3 min-w-max w-full rounded-3xl bg-white shadow-lg flex-col justify-evenly items-center">
// <div className="flex items-center justify-center space-x-2 ">
//   <UserCircleIcon className="h-10 w-10" />
//   <div className="text-start">
//     <p className="font-bold text-2xl">0+</p>
//     <p className="font-semibold">Downloads</p>
//   </div>
// </div>
// <div className="flex items-center justify-center space-x-2 ">
//   <LocationMarkerIcon className="h-10 w-10" />
//   <div className="text-start">
//     <p className="font-bold text-2xl">0+</p>
//     <p className="font-semibold">Locations</p>
//   </div>
// </div>
// <div className="flex items-center justify-center space-x-2 ">
//   <ServerIcon className="h-10 w-10" />
//   <div className="text-start">
//     <p className="font-bold text-2xl">0+</p>
//     <p className="font-semibold">Reviews</p>
//   </div>
// </div>
// </div>
