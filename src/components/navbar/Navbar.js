import React, { useState } from 'react';
import './navbar.scss';
import { RiCloseLine } from 'react-icons/ri';
import { AiOutlineMenu } from 'react-icons/ai';


const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#about">About</a></p>
    <p><a href="#gallery">Gallery</a></p>
    <p><a href="#contact">Contact</a></p>
  </>
)
const Navbar = ({ sticky }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className={sticky ? "navbar-container" : 'navbar'}>
      <div className="navbar-menu">
        {toggleMenu
        ? <RiCloseLine color='#f66657' onClick={() => setToggleMenu(false)} />
        : <AiOutlineMenu  onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="navbar-container-links">
            <Menu />
          </div>
        )}
      </div>    
    </nav>
  )
}

export default Navbar