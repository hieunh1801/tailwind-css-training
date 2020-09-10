import React from 'react';
import "./dropdown.css";

const Dropdown = () => {
  return <div className="relative">
    <button id="imgBtn" className="h-10 w-10 focus:outline-none rounded-full overflow-hidden border-1 border-gray-800">
      <img className="h-full w-full object-cover" src="https://i.pinimg.com/originals/03/ac/4e/03ac4e6bfd9fca6fc4c4857ad0ed7c1b.jpg" alt="img chu khiet quynh" />
    </button>
    <div id="dropdownContent" className="invisible absolute left-0 bg-white rounded-lg p-4 mt-2 shadow-xl">
      <div className="px-4 py-3 text-lg font-medium text-gray-900">Language</div>
      <ol>
        <li className="px-4 py-2 text-gray-800 hover:bg-gray-400 rounded-md">English</li>
        <li className="px-4 py-2 text-gray-800 hover:bg-gray-400 rounded-md">Vietnamese</li>
      </ol>
    </div>
  </div>
}

export default Dropdown;