import React, { useState } from "react"
import axios from 'axios';
import Layout from '../../components/Layout';



export default function AddWorkshop() {

    const [topic, setTopic] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [email, setEmail] = useState("");
    const [worshopproposol, setworshopproposol] = useState([]);

    const handleWorkshops = (e) => {

        setworshopproposol([
            ...worshopproposol,
            e.target.files[0]

        ]);
    }

    function send(e){
        e.preventDefault();
        const form = new FormData();
        form.append('topic', topic);
        form.append('description', description);
        form.append('date', date);
        form.append('email', email);

        console.log('form data'+form);

        for (let pic of worshopproposol) {
            form.append('worshopproposol', pic);
        }
        console.log('file data'+worshopproposol)
        // axios.post("http://localhost:8065/api/paper/create",newPaper).then(()=>{
        //     alert("Research paper added ");
        // }).catch((err)=>{
        //     alert(err);
        // })


        const token = localStorage.getItem('token');
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        console.log('user token'+config);
        
        axios.post( 
          'http://localhost:8065/api/workshop/create',
          form,
          config
        ).then(
            alert("Successfully Added"),
            console.log).catch(
                alert("There are some Error"),
                console.log)
        

        // axios.post("http://localhost:8065/api/workshop/create", form)
        // .then(function (response) {
        //         console.log(response);

               
        // })
           

        
        


    }

//     function sendData(e) {
//         e.preventDefault();

//         const form = new FormData();
//         form.append('topic', topic);
//         form.append('description', description);
//         form.append('date', date);
//         form.append('email', email);

//         console.log('form data'+form);

//         for (let pic of worshopproposol) {
//             form.append('worshopproposol', pic);
//         }
//         console.log('file data'+worshopproposol)
//         // axios.post("http://localhost:8065/api/paper/create",newPaper).then(()=>{
//         //     alert("Research paper added ");
//         // }).catch((err)=>{
//         //     alert(err);
//         // })

//         axios.post("http://localhost:8065/api/workshop/create", form)
//         .then(function (response) {
//                 console.log(response);

               
//         })
//             .catch(function (error) {
//                 console.log(error);
//                 console.log("error");
              
//             });

        
        


//}


    return (
        <Layout>
            &nbsp;&npsp;
            &nbsp;&npsp; &nbsp;&npsp; &nbsp;&npsp; &nbsp;&npsp; &nbsp;&npsp;

              
            <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Add Workshop</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
    </div>  


            <div className="container">
                <form onSubmit={send}>
                    <div className="form-group">
                        <label for="topic">Proposal Topic</label>
                        <input type="text" className="form-control" id="topic" placeholder="Enter Topic" onChange={(e) => {
                            setTopic(e.target.value)
                        }} />

                    </div>
                    <div class="mb-3">
                        <label htmlFor="description" class="form-label">Description</label>
                        <textarea class="form-control"
                            id="description"
                            rows="3"
                            name="description"
                            placeholder="Enter Description"
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }}>
                        </textarea>
                    </div>


                    <div className="form-group">
                        <label for="name">Date</label>
                        <input type="text" className="form-control" id="date" placeholder="Enter date" onChange={(e) => {
                            setDate(e.target.value);
                        }} />
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="text" className="form-control" id="email" placeholder="Enter email" onChange={(e) => {
                            setEmail(e.target.value);
                        }} />

                    </div>
                    <div className="form-group">
                        <label for="worshopproposol">Workshop proposal</label>
                        {
                            worshopproposol.length > 0 ?
                            worshopproposol.map((pic, index) => <div key={index}>{pic.name}</div>) : null
                        }
                        <input type="file" className="form-control" name="worshopproposol" onChange={handleWorkshops} />

                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </Layout>

    )
}
