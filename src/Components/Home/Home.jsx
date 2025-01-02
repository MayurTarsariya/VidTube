import { useEffect, useState } from "react";
import { Feed } from "../Feed/Feed";
import { SideBar } from "../SideBar/SideBar";
import "./Home.css";
export const Home = ({ sideBar, isDark }) => {
    const [category, setCategory] = useState(0);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <SideBar sideBar={sideBar} category={category} setCategory={setCategory} isDark={isDark} />
            <div className={`container ${sideBar ? '' : 'large-container'} ${isDark ? 'darkbg' : ''}`}>
                <Feed category={category} isDark={isDark} />
            </div>
        </>
    );
};
