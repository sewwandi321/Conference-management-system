import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import Layout from '../../components/Layout'
import Header from '../../components/Header/index';
import './style.css';
import Footer from './Footer';
import HeroSection from './HeroSection';
import Cards from './Cards';

const AdminHome = (props) => {

    return ( 
        <Layout sidebar>
        {/* // <Header /> */}
        {/* <Header > */}
            <>
           
        <HeroSection/>
        <Cards/>
        <Footer/>
        </>
        {/* </Header> */}
           
        </Layout>
    )
}


export default AdminHome