import { useEffect } from "react";
import { SearchSideBar } from "./SearchSideBar";
import { SearchVideo } from './SearchVideo';
export const Search = ({ sideBar, isDark }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <SearchSideBar sideBar={sideBar} isDark={isDark} />
            <div className={`container ${sideBar ? '' : 'large-container'} ${isDark ? 'darkbg' : ''}`}>
                <SearchVideo isDark={isDark} />
            </div>
        </>
    );
};
