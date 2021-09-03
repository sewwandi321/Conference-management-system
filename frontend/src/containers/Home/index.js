import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import Layout from '../../components/Layout'
import Header from '../../components/Header/index';
import './style.css';
import Footer from './Footer';
import HeroSection from './HeroSection';
import Cards from './Cards';
import Speakers from './Speakers';
import Organised from './Organised';
import Venues from './venues';

const Home = (props) => {

    return ( 
        <Layout >
        {/* // <Header /> */}
        {/* <Header > */}
            <>
           
        <HeroSection/>
        <Cards/>
        <Speakers />
        <Organised />
        <Venues />
        <Footer/>
        </>
        {/* </Header> */}
           
        </Layout>
    )
}


export default Home