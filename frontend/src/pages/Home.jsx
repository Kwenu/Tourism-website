import React from 'react'
import '../styles/home.css'
import { Container, Row, Col } from 'react-bootstrap';
import worldImg from '../assets/images/world.png'
import heroImg from '../assets/images/Img1.jpg'
import heroImg1 from '../assets/images/hero-img01.jpg'
import heroImg2 from '../assets/images/Img2.jpg'
import experienceImg from '../assets/images/experience1.jpg'

import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/serviceList.jsx';
import FeaturedTourList from '../components/Featured-tour/FeaturedTourList.jsx';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery.jsx';
import Testimonials from '../components/Testimonial/Testimonials.jsx';
import Newsletter from '../shared/Newsletter.jsx';

const Home = () => {
  return <>
    {/*======== hero section starts ========*/}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Explore Beyond Boundaries'}/>
                <img src={worldImg} alt="" />
              </div>
              <h1>Journeys Made Memorable with {" "}
                <span className='highlight'> Tour on Wheels</span>
              </h1>
              <p>"Welcome to Tour on Wheels, where every journey is 
                an adventure waiting to unfold. We're dedicated to 
                providing seamless travel experiences that transcend 
                boundaries and immerse you in the beauty of diverse 
                cultures and landscapes."</p>
            </div>
          </Col>

          <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-4">
              <img src={heroImg1} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg2} alt="" />
            </div>
          </Col>
          <SearchBar/>
        </Row>
      </Container>
    </section>

    {/*======== hero section starts ========*/}
    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services__subtitle">What We Serve</h5>
            <h2 className="services__title">We Offer Our Best Services</h2>
          </Col>
          <ServiceList/>
        </Row>
      </Container>
    </section>

    {/*======== featured tour section start ========*/}
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <Subtitle subtitle={"Explore"}/>
            <h2 className="featured__tour-title">Our Featured Tour</h2>
          </Col>
          <FeaturedTourList/>
          {/* <div>
            <button className="btn primary__btn">View All</button>
          </div> */}
        </Row>
      </Container>
    </section>
    {/*======== featured tour section end ========*/}

    {/*======== experience section start ========*/}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={"Experience"}/>
              <h2>With Our All Experience <br /> We Will serve you</h2>
              <p>Discover diverse destinations and immersive activities. <br />
                Create unforgettable memories with our curated travel 
                experiences, <br /> designed to offer you the best of adventure, 
                culture, and relaxation.</p>
            </div>

            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>1k+</span>
                <h6>Successful Trip</h6>
              </div>
              <div className="counter__box">
                <span>200+</span>
                <h6>Regular Clients</h6>
              </div>
              <div className="counter__box">
                <span>5</span>
                <h6>Years Experience</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt="experience" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/*======== experience section end ========*/}

    {/*======== gallary section start ========*/}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={"Gallery"}/>
            <h2 className="gallery__title">Visit Our Customers Tour Gallery</h2>
          </Col>
          <Col lg='12'>
            <MasonryImagesGallery/>
          </Col>
        </Row>
      </Container>
    </section>
    {/*======== gallary section end ========*/}

    {/*======== testimonial section start ========*/}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Customers Love'}/>
            <h2 className="testimonial__title">What Our Customers Say About Us</h2>
          </Col>
          <Col lg='12'>
            <Testimonials/>
          </Col>
        </Row>
      </Container>
    </section>
    {/*======== testimonial section start ========*/}
    <Newsletter/>
  </>
}

export default Home