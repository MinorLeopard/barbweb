import { MenuIcon } from "@heroicons/react/outline";
const Navbar = () => {
  return (
    <nav className="p-3 flex  md:max-w-xl lg:max-w-4xl min-w-max w-full justify-between items-center">
      <div>
        <p className="text-2xl">BARB</p>
      </div>
      <div>
        <MenuIcon className="h-7 w-7 md:hidden cursor-pointer transform transition-all  hover:animate-bounce" />
        <ul className="space-x-5 hidden md:flex">
          <a href="">
            <li className="">Our team</li>
          </a>
          <a href="">
            <li>Cities</li>
          </a>
          <a href="">
            <li>Career</li>
          </a>
          <a href="">
            <li>Press</li>
          </a>
          <a href="">
            <li>Report</li>
          </a>
          <a href="">
            <li>Contact us</li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
