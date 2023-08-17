import { Link } from 'react-router-dom'
import React from 'react'
import './styles/Navbar.css';
import menu from "./images/menu.png";
import { useState } from 'react';
import Logo from "./images/Logo.png"
import { getAuth, signOut } from "firebase/auth";
import { useContext } from 'react'
import { AppContext } from '../App'



export const Navbar = () => {
  const auth = getAuth();
  const { userData } = useContext(AppContext)

  const Logout = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      console.log(error)
    });
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (userData === null) {
    return (
      <div className='navbar'>
        <div className='navbar_logo'>
          <img src={Logo} alt=""></img>
          <h2>EcoScoot</h2>
        </div>
        <div className={`hamburger`} onClick={toggleMenu}>
          <img src={menu} alt="menu" />
        </div>
        <ul className={isMenuOpen ? "active" : ""}>
          <li>
            <Link className='Links' to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link className='Links' to="/EVmodels" onClick={toggleMenu} >EVmodels</Link>
          </li>
          <li>
            <Link className='Links' to="/aboutus" onClick={toggleMenu}>Aboutus</Link>
          </li>
          <li>
            <Link className='Links' to="/contact" onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
        <Link className='navbar_loginbutton' to="/login">Login</Link>

        <div className={`navbar_buttons ${isMenuOpen ? 'active2' : ''}`}>
          <Link className='navbar_registerbutton' to='/register'>Register</Link>
        </div>
      </div>
    )
  }
  else if (userData.uid !== "INJ5RoUppoSluMcrBw9X3GTaOYk2") {
    return (
      <div className='navbar'>
        <div className='navbar_logo'>
          <img src={Logo} alt=""></img>
          <h2>EcoScoot</h2>
        </div>
        <div className={`hamburger`} onClick={toggleMenu}>
          <img src={menu} alt="menu" />
        </div>
        <ul className={isMenuOpen ? "active" : ""}>
          <li>
            <Link className='Links' to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link className='Links' to="/EVmodels" onClick={toggleMenu} >EVmodels</Link>
          </li>
          <li>
            <Link className='Links' to="/aboutus" onClick={toggleMenu}>Aboutus</Link>
          </li>
          <li>
            <Link className='Links' to="contact" onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
        <div className={`navbar_buttons ${isMenuOpen ? 'active2' : ''}`}>
          <Link to="#" className='logoutLink' onClick={Logout}>
            Logout <span>{userData.displayName}</span>
          </Link>
        </div>
      </div>
    )
  }
  else if (userData.uid === "INJ5RoUppoSluMcrBw9X3GTaOYk2") {
    return (
      <div className='navbar'>
        <div className='navbar_logo'>
          <img src={Logo} alt=""></img>
          <h2>EcoScoot</h2>
        </div>
        <div className={`hamburger`} onClick={toggleMenu}>
          <img src={menu} alt="menu" />
        </div>
        <ul className={isMenuOpen ? "active" : ""}>
          <li>
            <Link className='Links' to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link className='Links' to="/EVmodels" onClick={toggleMenu} >EVmodels</Link>
          </li>
          <li>
            <Link className='Links' to="/aboutus" onClick={toggleMenu}>Aboutus</Link>
          </li>
          <li>
            <Link className='Links' to="/admin" onClick={toggleMenu}>Bookings</Link>
          </li>
        </ul>
        <div className={`navbar_buttons ${isMenuOpen ? 'active2' : ''}`}>
          <Link to="#" className='logoutLink' onClick={Logout}>
            Logout <span>Admin</span>
          </Link>
        </div>
      </div>
    )
  }

}