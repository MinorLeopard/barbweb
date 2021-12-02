const Dropdown = () => {
  return (
    <div>
      <ul className="flex flex-col items-start justify-center space-y-4">
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
        <a href="/login">
          <li className="transform transition-all duration-150 hover:scale-105 hover:underline">
            Admin ?
          </li>
        </a>
      </ul>
    </div>
  )
}

export default Dropdown
