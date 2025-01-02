import "./Navbar.css";
import logo from "../../../public/logo.webp";
import logo1 from "../../../public/logo1.webp";
import profile_icon from "../../../public/jack.webp";
import { NavLink, useNavigate } from 'react-router-dom';
import { RiMenu2Line } from "react-icons/ri";
import { IoIosSearch, IoMdVideocam } from "react-icons/io";
import { MdDarkMode, MdLightMode, MdWidgets } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { useState } from "react";

export const Navbar = ({ setSideBar, handleMode, isDark }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate=useNavigate();
  const handleSearch = async (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${encodeURIComponent(searchTerm)}`);  
      setSearchTerm("");
    }
  };
  return (
    <nav className={isDark ? 'flex-div navdark' : 'flex-div'}>
      <div className="nav-left flex-div">
        <RiMenu2Line className="icons" onClick={() => {
          setSideBar((preVal) => !preVal);
        }} />
        <NavLink to={"/"}>
          {isDark ? <img className="logo" src={logo1} alt="logo" /> : <img className="logo" src={logo} alt="logo" />}
        </NavLink>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search..." value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)} />
          <IoIosSearch className="icons" onClick={handleSearch} />
        </div>
      </div>
      <div className="nav-right flex-div">
        <IoMdVideocam className="icons" />
        <MdWidgets className="icons" />
        <FaBell className="icons" />
        {isDark ? <MdLightMode className="icons modeicon" onClick={handleMode} /> : <MdDarkMode className="icons modeicon" onClick={handleMode} />}
        <img src={profile_icon} className="user-icon" alt="profile_icon" />
      </div>
    </nav>
  );
};
