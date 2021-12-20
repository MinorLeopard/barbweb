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
            className="transition-all transform cursor-pointer h-7 w-7 md:hidden"
          />
          <div className="">{drop ? <Dropdown /> : null}</div>
        </div>

        <ul className="hidden space-x-5 md:flex">
          <a href="">
            <li className="transition-all duration-150 transform hover:scale-105 hover:underline">
              Our team
            </li>
          </a>
          <a href="">
            <li className="transition-all duration-150 transform hover:scale-105 hover:underline">
              Cities
            </li>
          </a>
          <a href="">
            <li className="transition-all duration-150 transform hover:scale-105 hover:underline">
              Career
            </li>
          </a>
          <a href="">
            <li className="transition-all duration-150 transform hover:scale-105 hover:underline">
              Press
            </li>
          </a>
          <a href="">
            <li className="transition-all duration-150 transform hover:scale-105 hover:underline">
              Report
            </li>
          </a>

          <a href="">
            <li className="transition-all duration-150 transform hover:scale-105 hover:underline">
              Contact us
            </li>
          </a>
          <a href="/login" className="">
            <p className="transition-all duration-150 transform hover:scale-105 hover:underline">
              Admin ?
            </p>
          </a>
        </ul>
      </div>

      <div className="hidden">
        <a href="/login" className="">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>
        </a>
      </div>
      <hr/>
    </nav>
  )
}

export default Navbar
