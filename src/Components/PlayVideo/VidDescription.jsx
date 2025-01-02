import { value_Converter } from "../../data";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";
export const VidDescription = ({ apiData, commentData }) => {
    const { snippet, statistics } = apiData;
    return (<>
        <div className="vid-description">
            <p>
                {snippet.description}
            </p>
            <hr />
            <h4>{value_Converter(statistics.commentCount)} Comments</h4>
            {commentData.map((curComment) => {
                const { id, snippet } = curComment;
                return (
                    <div key={id} className="comment">
                        <img src={snippet.topLevelComment.snippet.authorProfileImageUrl} alt={snippet.topLevelComment.snippet.authorDisplayName} />
                        <div>
                            <h3>
                                {snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span>
                            </h3>
                            <p>
                                {snippet.topLevelComment.snippet.textDisplay}
                            </p>
                            <div className="comment-action">
                                <BiSolidLike className="icons" />
                                <span>{value_Converter(snippet.topLevelComment.snippet.likeCount)}</span>
                                <BiSolidDislike className="icons" />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </>)
}