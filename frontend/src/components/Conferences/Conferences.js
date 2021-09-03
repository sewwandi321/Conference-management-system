import React from 'react'
import "./conferences.css";
import Conference from '../conference/Conference';

export default function Conferences({posts}) {
    return (
        <div className="posts">
            {posts.map(p=>(
                <Conference post={p}/>
             ))}
        </div>
    )
}
