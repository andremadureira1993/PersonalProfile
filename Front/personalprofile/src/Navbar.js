import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  };
  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <p className='logo-title'> André Madureira S. S. Moraes</p>
          {/* <img src={logo} className='nav-logo' alt='' /> */}
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              professional
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              personal
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              social
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>Get in touch</button>
      </div>
    </nav>
  );
};

export default Navbar;
