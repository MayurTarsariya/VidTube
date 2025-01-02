import moment from "moment";
import { value_Converter } from "../../data";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import { IoSave } from "react-icons/io5";
export const PlayVideoInfo = ({ apiData }) => {
    const { snippet, statistics } = apiData;
    return (
        <>
            <h3>{snippet.title}</h3>
            <div className="play-video-info">
                <p>
                    {value_Converter(statistics.viewCount)} Views
                    &bull; {moment(snippet.publishedAt).fromNow()}
                </p>
                <div>
                    <span>
                        <BiSolidLike className="icons"/>
                        {value_Converter(statistics.likeCount)}
                    </span>
                    <span>
                        <BiSolidDislike className="icons"/>
                    </span>
                    <span>
                        <FaShare className="icons"/>
                        Share
                    </span>
                    <span>
                        <IoSave className="icons"/>
                        Save
                    </span>
                </div>
            </div></>
    )
}