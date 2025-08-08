// src/components/Navbar.jsx
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
            <img  className='h-[30px] w-[30px]' src='/assets/upCV_logo.png'/>
              <span className="text-xl font-bold text-indigo-600">upCV </span>
              
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/analyze"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              Analyze
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}