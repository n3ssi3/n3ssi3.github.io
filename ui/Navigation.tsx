import React, { ReactElement, ReactNode, useState } from 'react'

const Navigation = () => (
  <ul className='dark:text-white'>
    <li className='p-4'>Home</li>
  </ul>
)

const MobileNavigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <button
      onClick={() => setIsNavOpen(!isNavOpen)}
      data-collapse-toggle='navbar-default'
      type='button'
      className='inline-flex items-center relative md:hidden rounded-lg text-white focus:outline-none dark:text-black'
      aria-controls='navbar-default'
      aria-expanded='false'>
      <span className='sr-only'>Open main menu</span>
      <svg
        className='w-6 h-6'
        aria-hidden='true'
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
          clipRule='evenodd'></path>
      </svg>
    </button>
  )
}

export { Navigation, MobileNavigation }
