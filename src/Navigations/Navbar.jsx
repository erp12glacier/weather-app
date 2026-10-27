import React from 'react'
import { Link } from 'react-router'

const navLinks = [
  { path: "/", label: "Home" },
  { path: "contact", label: "Contact" },
  { path: "about", label: "About" }

]
export const Navbar = () => {
  return (
    <div>
      <ul className='flex items-center justify-evenly w-11/12 mx-auto decoration-0 p-4  rounded shadow-2xl '>
        {
          navLinks.map(navLink => <Link to={navLink.path} className='decoration-neutral-content hover:text-red-400'>{navLink.label}</Link>)

        }
      </ul>
    </div>
  )
}
