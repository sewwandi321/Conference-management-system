import {useEffect, useState } from 'react';
import { useLocation ,Link} from 'react-router-dom';
import "./singleConference.css";
import axios from "axios";

export default function SingleConference() {
    const location = useLocation()
    // console.log(location.pathname.split("/")[2]);
    const path =location.pathname.split("/")[2];
    const [post, setPost] = useState({})

    useEffect(() => {
       const getPost = async() => {
           const res = await axios.get("http://localhost:8020/editor/posts/"+ path);
           setPost(res.data)
       }
       getPost();
        
    }, [path])

    return (
        <div className="singleConference">
            <div className="singleConfereceWrapper">
                {post.photo && (
                     <img 
                     src={post.photo} 
                     alt=""
                     className="singleConferenceImg"
                 />
                )}
               
                <h1 className="singleConferenceTitle">
                    {post.title}
                    <div className="singleConferenceEdit">
                        <i className="icon far fa-edit"></i>
                        <i className="icon far fa-trash-alt"></i>
                    </div>
                </h1>
                    <div className="singleConfereceInfo">
                        <span className="singleConferenceAuthor">
                            <Link to={`/editor-home/?user=${post.username}`} className="link">Editor:<b>{post.username}</b></Link>
                            
                        </span>
                        <span className="singleConferenceDate">{new Date(post.createdAt).toDateString()}</span>
                    </div>
                <p className="singleConferenceDesc">
                    {post.desc}
                </p>
               

            </div>
        </div>
    )
}
