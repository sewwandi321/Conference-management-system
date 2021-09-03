import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Input from '../../components/UI/Input';
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../actions';
import Select from 'react-select';
import './signup.css'

//signup function
const Signup = (props) => {

    const [name, setName] = useState('');
    const [contactnumber, setContactnumber] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const auth = useSelector(state => state.auth);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const userSignup = (e) => {

        e.preventDefault();

        const user = {
            name, email, password
        }
        dispatch(signup(user));
    }

    if (auth.authenticate) {
        return <Redirect to={'/'} />
    }

    if (user.loading) {
        return <Redirect to={'/'} />
    }


    return (
        <Layout>
      
            <div className="signup">
                <div className="regTitle">REGISTER</div>
                
                {user.message}
                <Form className="signupForm" onSubmit={userSignup}>
                <Row style={{ marginTop: '50px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        
                           
                               
                                    <Input
                                        label=" Name"
                                        placeholder=" Name"
                                        value={name}
                                        type="text"
                                        className="registerInput"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                


                            
                            <Input
                                label="Email"
                                placeholder="Email"
                                value={email}
                                type="Email"
                                className="registerInput"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Input
                                label="Password"
                                placeholder="Password"
                                value={password}
                                type="Password"
                                className="registerInput"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Input
                                label="contactnumber"
                                placeholder="contactnumber"
                                value={contactnumber}
                                type="text"
                                className="registerInput"
                                onChange={(e) => setContactnumber(e.target.value)}
                            />
                            <Input
                                label="role"
                                placeholder="Enter only researcher ,workshop presenter ,attendee"
                                value={role}
                                type="text"
                                className="registerInput"
                                onChange={(e) => setRole(e.target.value)}
                            />
                            





                            <Button className="regbtn" variant="primary" type="submit">
                                Submit
                            </Button>

            
                      
                    </Col>
                    
                </Row>
                </Form>

            </div>
            </Layout>
        
    )
}


export default Signup;