import { useParams } from "react-router-dom";
import { PlayVideo } from "../PlayVideo/PlayVideo";
import { Recommended } from "../Recommended/Recommended";
import "./Video.css";
import { useEffect } from "react";
export const Video = ({ isDark }) => {
    const { videoId, categoryId } = useParams();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className={isDark ? 'play-container playdark' : 'play-container'}>
            <PlayVideo videoId={videoId} categoryId={categoryId} isDark={isDark} />
            <Recommended categoryId={categoryId} isDark={isDark} />
        </div>
    );
};
