import React, { useState, useEffect } from "react"
import axios from 'axios';
import Layout from '../Layout';



export default function UpdatePage() {

    const [conference, setConference] = useState([]);
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [conductor, setConductor] = useState("");
    const [editorname, setEditorname] = useState("");
    const [venue, setVenue] = useState("");
    const [time, setTime] = useState("");
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState([]);

    const [choreDesc, setChoreDesc] = useState();

    useEffect(() => {
        function getConference() {
            axios.get("http://localhost:8065/api/conference/getconference").then((res) => {
                setConference(res.data);
                setTitle(res.data.title);
                console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getConference();
    }, [])

    const handleConference = (e) => {

        setPhoto([
            ...photo,
            e.target.files[0]

        ]);
    }
    function handleChange (e){
        setTitle({...title,[e.target.value]:e.target.value})
    };
    // function handleChange(e)  {
    //     e.preventDefault();
          
    //     setTitle(e.target.value);
    //   };


    function sendData(e) {
        e.preventDefault();

        const form = new FormData();
        form.append('title', title);
        form.append('date', date);
        form.append('conductor', conductor);
        form.append('editorname', editorname);
        form.append('venue', venue);
        form.append('description', description);
        form.append('time', time);


        for (let pic of photo) {
            form.append('photo', pic);
        }
        console.log(photo)
        // axios.post("http://localhost:8065/api/paper/create",newPaper).then(()=>{
        //     alert("Research paper added ");
        // }).catch((err)=>{
        //     alert(err);
        // })
        const token = localStorage.getItem('token');

        console.log('token is '+token);

       //// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwYTQyMmRiMTI2YjQwMThlODc2ZTciLCJyb2xlIjoicmV2aWV3ZXIiLCJpYXQiOjE2MjQ4MDE0NDYsImV4cCI6MTYyNTQwNjI0Nn0.s3vyEE-jxlc3ZKZYxkyhdYjiUQktFLpy-1DShF4zw1c';

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        console.log('user token'+config);
        
        axios.post( 
          'http://localhost:8065/api/conference/addconference',
          form,
          config
        ).then(console.log).catch(console.log)

       
            .catch(function (error) {
                console.log(error);
                console.log("errr");
              
            });






    }


    return (
        <Layout>
            &nbsp;&npsp;
            &nbsp;&npsp; &nbsp;&npsp; &nbsp;&npsp; &nbsp;&npsp; &nbsp;&npsp;
            
            <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Update Conferences</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
    </div>
    
            <div className="container">
            {conference.filter((p)=>p.status == "pending").map((conference, index) => (
                <form onSubmit={sendData}>
                    <div className="form-group">
                        <label for="title">title</label>
                        <input type="text" className="form-control" id="title" value ={conference.title} placeholder="" onChange={e => setTitle(e.target.value)} />

                    </div>
                    <div class="mb-3">
                        <label htmlFor="description" class="form-label">Description</label>
                        <textarea class="form-control"
                            id="description"
                            rows="3"
                            value = {conference.title}
                            name="description"
                            placeholder="Enter Description"
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}>
                        </textarea>
                    </div>
                 
                    <input
          type='text'
          value={conference.title}
          onChange={handleChange}
        />

                            

                    <div className="form-group">
                        <label for="date">Date</label>
                        <input type="date" className="form-control" id="date" placeholder="Enter date" onChange={(e) => {
                            setDate(e.target.value);
                        }} />
                    </div>
                    <div className="form-group">
                        <label for="conductor">Conductor Name</label>
                        <input type="text" className="form-control" id="conductor" placeholder="Enter Conductor name" onChange={(e) => {
                            setConductor(e.target.value);
                        }} />

                    </div>
                    <div className="form-group">
                        <label for="venue">Venue</label>
                        <input type="text" className="form-control" id="conductor" placeholder="Enter Conductor name" onChange={(e) => {
                            setVenue(e.target.value);
                        }} />

                    </div>
                   
                    <div className="form-group">
                        <label for="editorname">Editor name</label>
                        <input type="text" className="form-control" id="conductor" placeholder="Enter Conductor name" onChange={(e) => {
                            setEditorname(e.target.value);
                        }} />

                    </div>
                    <div className="form-group">
                        <label for="photo">Conference Photo</label>
                        {
                            photo.length > 0 ?
                            photo.map((pic, index) => <div key={index}>{pic.name}</div>) : null
                        }
                        <input type="file" className="form-control" name="photo" onChange={handleConference} />

                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            ))}
            </div>

        </Layout>

    )
}
