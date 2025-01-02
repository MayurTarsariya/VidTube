import { useNavigate, useParams } from "react-router-dom";
import { API_KEY } from "../../data";
import { useEffect, useState } from "react";
import moment from "moment";
import './Search.css'

export const SearchVideo = ({ isDark }) => {
    const [searchData, setSearchData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { searchQuery } = useParams();
    const navigate = useNavigate();
    const fetchSearchData = async () => {
        if (searchQuery.trim()) {
            const searchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=${encodeURIComponent(searchQuery)}&type=video&key=${API_KEY}`;
            try {
                const response = await fetch(searchUrl);
                const data = await response.json();
                setSearchData(data.items);
                setTimeout(() => {
                    setLoading(false);
                }, 100);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        }
    };
    useEffect(() => {
        setLoading(true);
        fetchSearchData();
    }, [searchQuery]);

    if (loading) {
        return (
            <div className={isDark ? 'loading loaddark' : 'loading'}>
                <h3>Loading...</h3>
            </div>
        );
    }

    return (
        <div className={isDark ? "search darksearch" : "search"}>
            {searchData.length === 0 ? (
                <div className="loading">
                    <h3>Loading...</h3>
                </div>
            ) : (
                searchData.map((curVideo) => {
                    const { snippet } = curVideo;
                    return (
                        <div
                            key={curVideo.id.videoId}
                            className="card"
                        >
                            <img src={snippet.thumbnails.medium.url} alt={snippet.title} title="Play" onClick={() => navigate(`/video/22/${curVideo.id.videoId}`)} />
                            <div className="details">
                                <h2>{snippet.title}</h2>
                                <p>
                                    {moment(snippet.publishedAt).fromNow()}
                                </p>
                                <h3>{snippet.channelTitle}</h3></div>
                        </div>
                    );
                })
            )}
        </div>
    );
};
