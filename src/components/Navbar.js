import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../context'

const Navbar = () => {
  const { openSidebar, isSidebarOpen } = useGlobalContext()
  return (
    <nav className='navbar'>
      <button onClick={openSidebar} className='sidebar-toggle'>
        <FaBars />
      </button>
      <div className='nav-center'>
        <div className='search-control'>
          <input
            className='search-compo'
            type='text'
            name='title'
            placeholder='search'
          />
          <button type='submit' className='submit-btn'>
            <AiOutlineSearch />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
