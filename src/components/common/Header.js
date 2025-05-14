import React, { useState } from "react"
import { Menu } from "@mui/icons-material"
// import { Col, Container, Row } from 'react-bootstrap'
import { Routes, Route, NavLink  } from "react-router";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Portfolio from "../pages/Portfolio";
import Testimonials from "../pages/Testimonials";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Errorpag from "../pages/Errorpag";



const Header = () => {

   const [responsive, setResponsive] = useState(false)

  return (
    <div>

        <Container fluid className='header'>
          <Row className="align-items-center menu px-10"> 
            <Col md="auto" className='logo'>
              <NavLink to="/" end>
                <img src="/img/logo.png" alt="Logo" height="70px" />
              </NavLink>
            </Col>
            <Col>
                <div className={responsive ? "hideMenu" : "nav"}>
                    <nav>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/About">About</NavLink>
                        <NavLink to="/Services">Services</NavLink>
                        <NavLink to="/Portfolio">Portfolio</NavLink>
                        <NavLink to="/Testimonials">Testimonials</NavLink>
                        <NavLink to="/Blog">Blog</NavLink>
                        <NavLink to="/Contact">Contact</NavLink>
                    </nav>
                </div>
                <button className='toggle' onClick={() => setResponsive(!responsive)}>
                    <Menu className='icon' />
                </button>
            </Col>
          </Row>
        </Container>

        <Routes>
            <Route index element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Testimonials" element={<Testimonials />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<Errorpag />} />
        </Routes>

    </div>
  );
};

export default Header;
