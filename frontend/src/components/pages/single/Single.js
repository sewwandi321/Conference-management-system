import React from 'react'
import "./single.css";
import Sidebar from "../../components/sidebar/Sidebar";
import SingleConference from '../../components/singleConference/SingleConference';

export default function Single() {
    return (
        <div className="single">
            <SingleConference />
            <Sidebar />
        </div>
    )
}
