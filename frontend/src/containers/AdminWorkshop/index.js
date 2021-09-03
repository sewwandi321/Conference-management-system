
import React, { useState ,useEffect} from 'react'
import Layout from '../../components/Layout'
import { Container, Row, Col, Table } from 'react-bootstrap';
import Input from '../../components/UI/Input';
import Modal from '../../components/UI/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct,deleteproductbyid,updateproductbyid } from '../../actions';
import { generatePublicUrl } from '../../urlConfig';
import axios from "axios";
import './style.css';
//create products function
const Workshop = (props) => {
    
    const [workshops, setWorkshops] = useState([]);
   
    const [paperDetailModal, setProductDetails] = useState(null);

    const token = localStorage.getItem('token');
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    console.log('user token'+config);
console.log("ddddd");
    useEffect(() => {
        function getWorkshops() {
            axios.get("http://localhost:8065/api/workshops",config).then((res) => {
                setWorkshops(res.data);
                console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getWorkshops();
    }, [])
   
   
    const handleCloseProductDetailsModal = () => {
        setProductDetails(false);
    }
    //show product detail modal
    const showProductDetailModal = (product) => {

        setProductDetails(product);
        //setProductDetailModal(true);
        console.log('nnn'+product);

    }
    const renderProductDetailsModal = () => {

        if (!paperDetailModal) {
            return null;
        }
        console.log('nnn');

        
       return (
            <Modal
                show={paperDetailModal}
                handleClose={handleCloseProductDetailsModal}
                modalTitle={'Workshop Details'}
                size="lg"

            >
                <Row>
                    <Col md="6">
                        <label className="key">Topic</label>
                        <p className="key">{paperDetailModal.topic}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Description</label>
                        <p className="key">{paperDetailModal.description}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <label className="key">Date</label>
                        <p className="key">{paperDetailModal.date}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Email</label>
                        <p className="key">{paperDetailModal.email}</p>
                    </Col>
                    
                </Row>
               
                

            </Modal>
        );
    }

    return (
        <Layout sidebar>
            <Container>
                <Row>
                    <Col >
                        <div>
                            <h3>workshops</h3>
                            <Table style={{ fontsize: 12 }} responsive="sm">
                <thead>
                    <tr >
                        
                        <th>Topic</th>
                        <th>Description</th>
                        <th>Date</th>
                        

                    </tr>
                    {/*  */}
                </thead>
                <tbody>{workshops.filter((p)=>p.status == "pending").map((workshops, index) => (
                            <tr >
                                
                                <td onClick={() => showProductDetailModal(workshops)}
                            key={workshops._id}>{workshops.topic}</td>
                                <td>{workshops.description}</td>
                                <td>{workshops.date}</td>
                            
                                <td>
                                <p>
                    <a href={'http://localhost:8065/uploads/'+workshops.worshopproposol[0].fil} download="My_File.pdf">
                    {/* <a href="http://localhost:8065/uploads/test.pdf" download> */}
                     <img src={'http://localhost:8065/uploads/'+workshops.topic} alt={workshops.topic} width="104" height="142"/>
                     {/* <i class="text-danger bi bi-download" ></i>  */}
                    </a>

                    </p></td>
                                <td>
                                    <button onClick={e => 
                                    axios.put(`http://localhost:8065/api/approveworkshops/approve/${workshops._id}`,config)
                                    .then(res=>{
                                               alert("Approved");
                                                console.log('added');
                                            })
                                            

                                        } >Approve
                                    </button>
                                   
                                    <button onClick={e => 
                                    axios.put(`http://localhost:8065/api/approveworkshops/reject/${workshops._id}`,config)
                                    .then(res=>{
                                               alert("Rejected");
                                                console.log('added');
                                            })
                                            

                                        }
                                    >
                                    Reject
                                    </button>
                                </td>

                            </tr>))}
                </tbody>
            </Table>
                           
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col>
                       
                    </Col>

                </Row>
            </Container>
           
            {renderProductDetailsModal()} 
            

        </Layout>
    )
}

export default Workshop