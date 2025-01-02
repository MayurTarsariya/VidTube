import "./SideBar.css";
import jack from "../../../public/jack.webp";
import simon from "../../../public/simon.webp";
import tom from "../../../public/tom.webp";
import megan from "../../../public/megan.webp";
import cameron from "../../../public/cameron.webp";
import { FaCarSide, FaHome, FaMusic, FaVolleyballBall } from "react-icons/fa";
import { IoGameController, IoNewspaper } from "react-icons/io5";
import { PiReadCvLogoFill, PiTelevisionFill } from "react-icons/pi";
import { GrTechnology } from "react-icons/gr";

export const SideBar = ({ sideBar, category, setCategory, isDark }) => {
  return (
    <div className={`sidebar ${sideBar ? " " : "small-sidebar"} ${isDark ? 'sidedark' : ""}`}>
      <div className="shortcut-links">
        <div className={`side-link ${category === 0 ? 'active' : ""}`} onClick={() => { setCategory(0) }}>
          <FaHome className="icons" />
          <p>Home</p>
        </div>
        <div className={`side-link ${category === 20 ? 'active' : ""}`} onClick={() => { setCategory(20) }}>
          <IoGameController className="icons" />
          <p>Gaming</p>
        </div>
        <div className={`side-link ${category === 2 ? 'active' : ""}`} onClick={() => { setCategory(2) }}>
          <FaCarSide className="icons" />
          <p>Automobiles</p>
        </div>
        <div className={`side-link ${category === 17 ? 'active' : ""}`} onClick={() => { setCategory(17) }}>
          <FaVolleyballBall className="icons" />
          <p>Sports</p>
        </div>
        <div className={`side-link ${category === 24 ? 'active' : ""}`} onClick={() => { setCategory(24) }}>
          <PiTelevisionFill className="icons" />
          <p>Entertainment</p>
        </div>
        <div className={`side-link ${category === 28 ? 'active' : ""}`} onClick={() => { setCategory(28) }}>
          <GrTechnology className="icons" />
          <p>Technoloy</p>
        </div>
        <div className={`side-link ${category === 10 ? 'active' : ""}`} onClick={() => { setCategory(10) }}>
          <FaMusic className="icons" />
          <p>Music</p>
        </div>
        <div className={`side-link ${category === 22 ? 'active' : ""}`} onClick={() => { setCategory(22) }}>
          <PiReadCvLogoFill className="icons" />
          <p>Blogs</p>
        </div>
        <div className={`side-link ${category === 25 ? 'active' : ""}`} onClick={() => { setCategory(25) }}>
          <IoNewspaper className="icons" />
          <p>News</p>
        </div>
      </div>
      <hr />
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={jack} alt="profile_img" />
          <p>PewDiePie</p>
        </div>
        <div className="side-link">
          <img src={simon} alt="profile_img" />
          <p>Mrbeast</p>
        </div>
        <div className="side-link">
          <img src={tom} alt="profile_img" />
          <p>Justin Bieber</p>
        </div>
        <div className="side-link">
          <img src={megan} alt="profile_img" />
          <p>5-Minute Craft</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="profile_img" />
          <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
};
