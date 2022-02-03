const Dropdown = () => {
  return (
    <div>
      <ul className="flex flex-col items-start justify-center space-y-4">
        <a href="/ourteam">
          <li className="transform transition-all duration-150 hover:scale-105 hover:underline">
            Our team
          </li>
        </a>
        <a href="/Cities">
          <li className="transform transition-all duration-150 hover:scale-105 hover:underline">
            Cities
          </li>
        </a>
        <a href="/Career">
          <li className="transform transition-all duration-150 hover:scale-105 hover:underline">
            Career
          </li>
        </a>
        <a href="/press">
          <li className="transform transition-all duration-150 hover:scale-105 hover:underline">
            Press
          </li>
        </a>
        <a href="/bugReport">
          <li className="transform transition-all duration-150 hover:scale-105 hover:underline">
            Report
          </li>
        </a>

        <a href="/contactUs">
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
