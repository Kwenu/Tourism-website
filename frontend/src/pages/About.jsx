import React from 'react'
import { Container, Row } from 'react-bootstrap';
import '../styles/about.css'

const About = () => {
  return <>
  <section>
    <Container>
        <Row>
            <div className="about__img">
                
            </div>
            <div className="about__content">
                <h2 className='text-center'>About Us</h2>
                <p className='text-center'>Tour on Wheels is a travel agency that offers a wide range of travel services. We specialize in providing tours and travel services to individuals and groups. Our services include booking hotels and car rentals. Our team of travel experts is dedicated to providing you with the best travel experience possible. We are committed to making your journey memorable and hassle-free. Contact us today to book your next adventure!</p>
            </div>
        </Row>
    </Container>
  </section>
  </>
}

export default About