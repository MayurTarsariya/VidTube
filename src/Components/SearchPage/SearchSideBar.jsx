import jack from "../../../public/jack.webp";
import simon from "../../../public/simon.webp";
import tom from "../../../public/tom.webp";
import megan from "../../../public/megan.webp";
import cameron from "../../../public/cameron.webp";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../SideBar/SideBar.css";
export const SearchSideBar = ({ sideBar, isDark }) => {
    const navigate = useNavigate();
    return (
        <div
            className={`sidebar ${sideBar ? " " : "small-sidebar"} ${isDark ? "sidedark" : ""
                }`}
        >
            <div className="shortcut-links">
                <div
                    className={`side-link`}
                    onClick={() => {
                        navigate("/");
                    }}
                    title="Go To Home"
                >
                    <FaHome className="icons" />
                    <p>Home</p>
                </div>
            </div>
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
