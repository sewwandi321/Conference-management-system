import React from 'react'
import { useEffect, useState } from "react";
import "./home.css";

import Conferences from "../../Conferences/Conferences";

import axios from "axios";
import { useLocation } from "react-router";

export default function Conference(){
  const [posts, setPosts] = useState([]);
  // const location = useLocation();
   const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:8065/api/conference/getconference"+search);
      setPosts(res.data);
      console.log(res.data)
    }
    fetchPosts();
    console.log(posts)
  }, [search]);
    return(
        <>
        {/* <Header /> */}
        <div className="home">
          <Conferences posts={posts}/>
          {/* <Sidebar /> */}
            
        </div>
        </>
    )
}