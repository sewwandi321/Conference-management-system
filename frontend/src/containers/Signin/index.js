import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { Container ,Form,Row, Col,Button} from "react-bootstrap";
import Input from '../../components/UI/Input';
import {  login } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import "./signin.css";

    //sign in function
 const Signin = (props) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const userLogin = (e) => {

       e.preventDefault();

        const user = {
            
            email,password
           
        }
        dispatch(login(user));
    }
    if(auth.authenticate){
        return <Redirect to ={'/'}/>
    }


    return(
       <Layout>
      <div className="sigin">
              <Row style ={{ marginTop:'50px'}}>
                  <Col md = {{span : 6,offset:3}}>
                  <Form className="siginForm" onSubmit={userLogin}>
              
                            <Input
                                label ="Email"
                                placeholder="Email"
                                value={email}
                                type="Email"
                               
                                onChange={(e)=>setEmail(e.target.value)}
                           />
                     

                            <Input
                                label ="Password"
                                placeholder="Password"
                                
                                value={password}
                                type="Password"
                                
                                onChange={(e)=>setPassword(e.target.value)}
                           />
                     
                       
                        <Button className="siginbrt" variant="primary" type="submit">
                            SIGN IN
                        </Button>

        </Form>
                  </Col>
              </Row>
             
              </div>
       </Layout>
    )
}


export default Signin