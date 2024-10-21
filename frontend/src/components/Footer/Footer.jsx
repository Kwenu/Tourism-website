import React from 'react'
import '../Footer/footer.css'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo2.jpg'
import design from '../../assets/images/lingo.png'

const quick_links = [
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tours'
  }
];

const quick_links2 = [
  {
    path:'/login',
    display:'Login'
  },
  {
    path:'/register',
    display:'Register'
  }
];

const Footer = () => {
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='3'>
          <div className="logo">
            <img src={logo} alt="" />
            <p>Journeys Made Memorable with <br /> <b>Tour on Wheels</b></p>
            <div className="social__links d-flex align-items-center gap-4">
              <span>
                <Link to='#'><i class="ri-whatsapp-line"></i></Link>
              </span>
              <span>
                <Link to='#'><i class="ri-facebook-circle-line"></i></Link>
              </span>
              <span>
                <Link to='#'><i class="ri-instagram-line"></i></Link>
              </span>
              <span>
                <Link to='#'><i class="ri-twitter-line"></i></Link>
              </span>
            </div>
          </div>
        </Col>

        <Col lg='3'>
          <h5 className="footer__link-title">Discover</h5>
          
          <ListGroup className="footer__quick-links">
            {
              quick_links.map((item, index)=>(
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>
        <Col lg='3'>
        <h5 className="footer__link-title">Quick Links</h5>
          
          <ListGroup className="footer__quick-links">
            {
              quick_links2.map((item, index)=>(
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>
        <Col lg='3'>
        <h5 className="footer__link-title">Contacts</h5>
          
          <ListGroup className="footer__quick-links">
            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
              <h6 className='mb-0 d-flex align-items-center gap-2'>
                <span><i class="ri-map-pin-line"></i></span>
                Address : 
              </h6>
              <p className='mb-0'>Wanchawala, Galle.</p>
            </ListGroupItem>

            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
              <h6 className='mb-0 d-flex align-items-center gap-2'>
                <span><i class="ri-mail-line"></i></span>
                Email : 
              </h6>
              <p className='mb-0'>contact.touronwheels@gmail.com</p>
            </ListGroupItem>

            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
              <h6 className='mb-0 d-flex align-items-center gap-2'>
                <span><i class="ri-phone-line"></i></span>
                Contact Number : 
              </h6>
              <p className='mb-0'>+94 77 234 5678</p>
            </ListGroupItem>
          </ListGroup>
        </Col>

        <Col lg='12' className='text-center pt-5'>
          <p className="copyright">© Copyright 2024, Tour on Wheel. All Right Reserved. </p>
          <p className="developer">Design and Developed by :- <a href="https://api.whatsapp.com/message/ND63BU4PRWSDD1?autoload=1&app_absent=0"><img src={design} alt="lingo"/></a></p>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer