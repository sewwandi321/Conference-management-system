import {useState} from 'react'
import "./create.css";
import axios from "axios";

export default function Create() {
    const[title,setTitle] = useState("");
    const[date,setDate] = useState("");
    const[editor,setEditor] = useState("");
    const[conductor,setConductor] = useState("");
    const[desc,setDesc] = useState("");

    function sendDate(e){
        e.preventDefault();

        const form = new FormData();
        
    }

    return (
        <div className="create">
            <form onSubmit={sendDate}>
                <div>
                <label>title</label>
                <input type="text" placeholder="enter Title" id="title" className="writeInput"/>
                </div>

                <div>
                <label>Date</label>
                <input type="Date" placeholder="enter Date" id="date" className="writeInput"/>
                </div>

                <div>
                <label>Editor</label>
                <input type="text" placeholder="enter Editor Name" id="editor" className="writeInput"/>
                </div>

                <div>
                <label>Conductor</label>
                <input type="text" placeholder="enter Conductor" id="conductor" className="writeInput"/>
                </div>

                <div>
                    <textarea type="text" placeholder="enter description" id="desc" className="writeInput writeText"></textarea>
                </div>
                <button  type="submit">
          Publish
        </button>
            </form>        
        </div>
    )
}
