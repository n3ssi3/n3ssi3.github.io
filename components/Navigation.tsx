import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

const Navigation = () => (
  <ul className='dark:text-white'>
    <li className='p-2'>
      <Link href='/'>Home</Link>
    </li>
    <li className='p-2'>
      <Link href='/#about' scroll={false} prefetch={false}>
        About me
      </Link>
    </li>
    <li className='p-2'>
      <Link href='/#work' scroll={false} prefetch={false}>
        Work Experience
      </Link>
    </li>
    <li className='p-2'>
      <Link href='/#portfolio' scroll={false} prefetch={false}>
        Portfolio
      </Link>
    </li>
  </ul>
)

type Props = {
  setSettings: (settings: boolean) => void
  isNavOpen: boolean
  setIsNavOpen: (isNavOpen: boolean) => void
}
const MobileNavigation = ({ isNavOpen, setIsNavOpen, setSettings }: Props) => {
  return (
    <>
      <button
        onClick={() => {
          setIsNavOpen(!isNavOpen)
          setSettings(false)
        }}
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
      <div
        className={clsx('absolute bg-zinc-800 text-white p-4 z-20 mt-2 w-full top-full left-0', {
          hidden: !isNavOpen
        })}>
        <Navigation />
      </div>
    </>
  )
}

export { Navigation, MobileNavigation }
