import {Link} from "react-router-dom";
import "./topbar.css";

export default function TopBar(){
  const user = false;
  return(
    <div className="top">
      <div className="topLeft"></div>
      <div className="topCenter">
        <ul className="topList">
        <li className="topListItem">
          <Link to="/editor-home">HOME</Link>
        </li>
        <li className="topListItem">
        <Link to="/create">CREATE</Link>
        </li>
        <li className="topListItem">LOGOUT</li>
        </ul>
        
      </div>
      <div className="topRight">
        {
          user ?(
            <img
            className="topImg"
            src=""
            alt=""/>

          ):(
            <ul className="topList">
              <li className="topListItem"> 
               <Link to="/login">LOGIN</Link>
               </li>
          <li className="topListItem">
          <Link to="/register">REGISTER</Link>
          </li>
           
            </ul>
          )
        }
       

          <i className="topSearchIcon fas fa-search"></i>
      </div>

    </div>
  )
}