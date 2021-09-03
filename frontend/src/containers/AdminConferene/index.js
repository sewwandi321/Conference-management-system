
import React, { useState ,useEffect} from 'react'
import Layout from '../../components/Layout'
import { Container, Row, Col, Table } from 'react-bootstrap';
import Input from '../../components/UI/Input';
import Modal from '../../components/UI/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct,deleteproductbyid,updateproductbyid } from '../../actions';
import { generatePublicUrl } from '../../urlConfig';
import axios from "axios";

//create products function
const ReaseachPaper = (props) => {
    
    const [conference, setConference] = useState([]);
    
    const [paperDetailModal, setProductDetails] = useState(null);
console.log("ddddd");
    useEffect(() => {
        function getConference() {
            axios.get("http://localhost:8065/api/conference/approve/getapproveconference/").then((res) => {
                setConference(res.data);
                console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getConference();
    }, []);
   
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
                modalTitle={'Reaseach paper details'}
                size="lg"

            >
                <Row>
                    <Col md="6">
                        <label className="key">Title</label>
                        <p className="key">{paperDetailModal.title}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Description</label>
                        <p className="key">{paperDetailModal.description}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Quantity</label>
                        <p className="key">{paperDetailModal.editorname}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <label className="key">Quantity</label>
                        <p className="key">{paperDetailModal.date}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Quantity</label>
                        <p className="key">{paperDetailModal.time}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Quantity</label>
                        <p className="key">{paperDetailModal.conductor}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Quantity</label>
                        <p className="key">{paperDetailModal.venue}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Quantity</label>
                        <p className="key">{paperDetailModal.email}</p>
                    </Col>
                    
                </Row>
                {/* <Row>
                    <Col md="12">
                        <label className="key">Description</label>
                        <p className="key">{productDetails.description}</p>
                    </Col>

                </Row> */}
                

            </Modal>
        );
    }

    return (
        <Layout sidebar>
            <Container>
                <Row>
                    <Col >
                        <div>
                            <h3>Conference </h3>
                            <Table style={{ fontsize: 12 }} responsive="sm">
                <thead>
                    <tr >
                        
                        <th>Title</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Venue</th>
                        <th>Conductor</th>
                        

                    </tr>
                </thead>
                {/* .filter((p)=>p.status == "pending") */}
                <tbody>{conference.filter((p)=>p.status == "pending").map((conference, index) => (
                            <tr >
                                
                                <td onClick={() => showProductDetailModal(conference)}
                            key={conference._id}>{conference.title}</td>
                                <td>{conference.description}</td>
                                <td>{conference.date}</td>
                                <td>{conference.email}</td>
                                <td>{conference.time}</td>
                                <td>{conference.venue}</td>
                                <td>{conference.conductor}</td>
                                
                                <td>
                                    <button onClick={e => 
                                    axios.put(`http://localhost:8065/api/conference/approveconference/${conference._id}`)
                                    .then(res=>{
                                               alert("approved");
                                                console.log('added');
                                            })
                                            

                                        }>Approve
                                    </button>
                                    <button onClick={e => 
                                    axios.put(`http://localhost:8065/api/conference/rejectconference/${conference._id}`)
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

export default ReaseachPaper