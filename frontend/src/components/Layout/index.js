import React from 'react';
import Header from '../Header';
import { Container,Row,Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './style.css';
//part13
const Layout = (props) => {
  return (
    <>
      <Header />
      {
        props.sidebar ?

          <Container fluid>
            <Row>
              <Col md={2} className="sidebar">
                <ul>
                  <li><NavLink exact to={'/'}>Home</NavLink></li>
                  <li><NavLink to={'/adminconference'}>Conference </NavLink></li>
                  <li><NavLink to={'/adminreseach'}>Reseach papers</NavLink></li>
                  <li><NavLink to={'/adminworkshop'}>Admin WorkShop</NavLink></li>
                </ul>
              </Col>
              <Col md={10} style={{ marginLeft: 'auto' ,paddingTop:'60px'  }}>
              {props.children}
                </Col>
            </Row>
          </Container>
          :
          props.children
        }
    

    </>
  )
}

export default Layout;