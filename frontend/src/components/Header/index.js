import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { signout } from '../../actions';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './header.css';

const Header = (props) => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signout());
  }
  const options = [
    'one', 'two', 'three'
  ];

  const defaultOption = options[0];

  //for login users
  const renderLoggedInLinks = () => {
    return (
      <Nav>
       


        &nbsp;&nbsp;
        <li className="nav-item">

          <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">For Authors
              <span class="caret"></span></button>
            <ul class="dropdown-menu">
              <li><a href="/add">Add ReaserchPapers</a></li>
              <li><a href="/papers"> View ResearchPapers</a></li>

            </ul>
          </div>


        </li>
        &nbsp;&nbsp;
        <li className="nav-item">

          <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Workshops
              <span class="caret"></span></button>
            <ul class="dropdown-menu">
              <li><a href="/addworkshops">Add Workshops</a></li>
              <li><a href="/workshops"> View Workshops</a></li>

            </ul>
          </div>


        </li>
        &nbsp;&nbsp;
        <li className="nav-item">

<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">For Admin
    <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li><a href="/adminreseach">Approve Research</a></li>
    <li><a href="/adminworkshop"> Approve Workshops</a></li>
    <li><a href="/adminconference">Approve Conference</a></li>

  </ul>
</div>


</li>
&nbsp;&nbsp;
        <li className="nav-item">

<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Conferences
    <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li><a href="/addconference">Add Conference</a></li>
    <li><a href="/editorhome"> View Conference</a></li>
    <li><a href="/updateCinference"> Edit Conference</a></li>

  </ul>
</div>


</li>


        {/* papers */}
        {/* <li className="nav-item">
          <NavLink to="/add" className="nav-link">Create Items</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/papers" className="nav-link">Papers</NavLink>
        </li> */}
&nbsp;&nbsp;
<li className="nav-item">
          <button type="pay" className="btn btn-primary" onClick={logout}>Signout</button>
          {/* <span className="nav-link" onClick={logout}>Signout</span> */}

        </li>

      </Nav>
    );

  }

  //for nonlogin users
  const renderNonLoggedInLinks = () => {
    return (
      <Nav>

        <li className="nav-item">
          <NavLink to="signin" className="nav-link">Signin</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/signup" className="nav-link">Signup</NavLink>
        </li>
        {/* papers */}
        

        {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton> */}

        {/* papers */}
        {/* <li className="nav-item">
        <a className="nav-link" href="/add">Create Items</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="/papers">Papers</a> */}
        {/* <Link to = "/add" className ="nav-link">Create Items</Link> */}

        {/* </li> */}
      </Nav>
    );
  }

  return (
    <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark" style={{ zIndex: 1 }}>
      <Container fluid>

        <Link to="/" className="navbar-brand">ICon</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">


          </Nav>
          {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()};

        </Navbar.Collapse>
      </Container>

    </Navbar>
  )
}

export default Header