import React, { useState } from 'react';
import logo from '../images/logo.png';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    const activeStyles = {
        fontWeight: "bolder",
        borderBottom: "solid 5px ",
        color: "black",
        marginBottom:"18px  "
    }  
    const passivStyles = {
        fontWeight: "bolder",
        borderBottom: "solid 5px ",
        color: "white",
        marginBottom:"18px  "
    }  
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <section className=" fixed top-0 right-0 left-0 p-16 justify-between z-50   w-full">
      <div className="flex w-full justify-between">
        <div className="flex">
          <Link to="/">
            <img src={logo} alt="" className="w-20 -ml-4 mt-1 cursor-pointer" />
          </Link>
        </div>

        <div>
          <div className="dropdown dropdown-end lg:hidden opacity-1">
            <label tabIndex={0} className="btn m-1 text-white bg-black" onClick={toggleDropdown}>
              Menu
            </label>
            <ul
              tabIndex={0}
              className={isOpen ? 'dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40' : 'hidden'}
            >
              <li>
                <Link to="/">
                  <button className="underline">01. Home</button>
                </Link>
              </li>

              <li>
                <Link to="/history">
                  <button className="underline">02. HISTORY</button>
                </Link>
              </li>
              <li>
                <Link to="team">
                  <button className="underline">03. Team</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="hidden lg:flex flex-row gap-24 font-bold pr-5 pt-5 text-lg transition-colors">
        <NavLink to="/"  style={({isActive}) => isActive ? activeStyles : passivStyles} >
           <h1>01. Home</h1> 
          </NavLink>
          <NavLink to="history"  style={({isActive}) => isActive ? activeStyles : passivStyles} >
           <h1>02. History</h1>
          </NavLink>
          <NavLink to="team"  style={({isActive}) => isActive ? activeStyles : passivStyles} >
            <h1 >03. TEAM</h1>
          </NavLink>
        </div>
      </div>

     
    </section>
  );
}

export default Header;
