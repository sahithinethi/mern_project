import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar as BSNavbar, Nav } from 'react-bootstrap';

const Navbar = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem('userdbtoken');
    navigate('/login');
  };

  if (localStorage.getItem('userdbtoken')) {
    return (
      <BSNavbar bg="light" variant="light" expand="lg" fixed="top">
        <div className="container-fluid">
          <BSNavbar.Brand>
            <Link to="/">HOME</Link>
          </BSNavbar.Brand>
          <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BSNavbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/Products" className="nav-link">
                Products
              </Link>
              <button style={{boxDecorationBreak:"slice"}} onClick={handleSubmit}>
                Logout
              </button>
            </Nav>
          </BSNavbar.Collapse>
        </div>
      </BSNavbar>
    );
  } else {
    return (
      <BSNavbar bg="light" variant="light" expand="lg" fixed="top" color='green'>
        <div className="container-fluid">
          <BSNavbar.Brand>
            <Link to="/">HOME</Link>
          </BSNavbar.Brand>
          <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BSNavbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </Nav>
          </BSNavbar.Collapse>
        </div>
      </BSNavbar>
    );
  }
};

export default Navbar;
