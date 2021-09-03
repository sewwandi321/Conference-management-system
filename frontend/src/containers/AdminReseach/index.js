
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
const ReaseachPaper = (props) => {
    
    const [papers, setPapers] = useState([]);
    
    const [paperDetailModal, setProductDetails] = useState(null);
    const token = localStorage.getItem('token');
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
    
            console.log('user token'+config);
console.log("ddddd");
    useEffect(() => {
        function getPapers() {
            // const token = localStorage.getItem('token');
            // const config = {
            //     headers: { Authorization: `Bearer ${token}` }
            // };
    
            // console.log('user token'+config);
              axios.get( 
                'http://localhost:8065/api/approvep/',
                config
              ).then((res) => {
                setPapers(res.data);
                console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getPapers();
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
                </Row>
                <Row>
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
                            <h3>Reseach Paper</h3>
                            <Table style={{ fontsize: 12 }} responsive="sm">
                <thead>
                    <tr >
                        
                        <th>Title</th>
                        <th>Description</th>
                        <th>email</th>
                        

                    </tr>
                </thead>
                <tbody>{papers.filter((p)=>p.status == "pending").map((papers, index) => (
                            <tr >
                                
                                <td onClick={() => showProductDetailModal(papers)}
                            key={papers._id}>{papers.title}</td>
                                <td>{papers.email}</td>
                                <td>{papers.description}</td>
                                <td>


                                <p>
                    <a href={'http://localhost:8065/uploads/'+papers.researchpaper[0].fil} download="My_File.pdf">
                    {/* <a href="http://localhost:8065/uploads/test.pdf" download> */}
                     <img src={'http://localhost:8065/uploads/'+papers.title} alt={papers.title} width="104" height="142"/>
                     {/* <i class="text-danger bi bi-download" ></i>  */}
                    </a>

                    </p>

                                </td>
                                <td>
                                    <button onClick={e => 
                                    
                                    axios.put(`http://localhost:8065/api/paper/approveper/${papers._id}`,config)
                                    .then(res=>{
                                               alert("approved");
                                                console.log('added');
                                            })
                                            

                                        } >Approve
                                    </button>
                                    <button onClick={e => 
                                    axios.put(`http://localhost:8065/api/paper/rejectpaper/${papers._id}`,config)
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
                            {/* <button onClick={handleShow} >ADD</button> */}
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/* {renderProducts()} */}
                    </Col>

                </Row>
            </Container>
            {/* {renderAddProductModal()}*/}
            {renderProductDetailsModal()} 
            

        </Layout>
    )
}

export default ReaseachPaper