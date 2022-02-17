const Dropdown = () => {
  return (
    <div>
      <ul className="flex flex-col items-start justify-center space-y-4">
      <a href="/salons">
          <li className="transform transition-all duration-150 hover:scale-105 hover:underline">
            Salons
          </li>
        </a>
        <a href="/Cities">
          <li className="transform transition-all duration-150 hover:scale-105 hover:underline">
            Cities
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
      </ul>
    </div>
  )
}

export default Dropdown
