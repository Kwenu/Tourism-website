import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-4.jpg";
import ava02 from "../../assets/images/ava-5.jpg";
import ava03 from "../../assets/images/ava-6.jpg";
import ava04 from "../../assets/images/ava-7.jpg";
import ava05 from "../../assets/images/ava-8.jpg";
import ava06 from "../../assets/images/ava-9.jpg";


const Testimonials = () => {

    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slideToScroll: 1,
                    infinite: true,
                    dots: true
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slideToScroll: 1,
                },
            }
        ]
    }

  return (
    <Slider { ...settings}>
        <div className="testimonial py-4 px-3">
            <p>
            "Tour on Wheels is our go-to partner for creating 
            unforgettable travel experiences for our clients. Their 
            attention to detail, exceptional service, and diverse 
            itineraries consistently impress. Highly recommended for 
            seamless and memorable trips."
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className="w-25 h-25 rounded-4" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Prabasha Budhdhima</h6>
                    <p>Travel Agent</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>
            "An amazing experience from start to finish! The customized tour matched our interests perfectly, and the attention to detail was impressive. Exceptional service, memorable adventures, and a truly personalized travel experience."
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className="w-25 h-25 rounded-4" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Vihanga Nethmin</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>
            "Loved every moment of our trip with Tour on Wheels! The guides were friendly, informative, and made the journey so enjoyable. Every stop was well-planned and fascinating. Can't wait to book another adventure with them soon."
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className="w-25 h-25 rounded-4" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Saveen Cheshitha</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>
            "The best travel experience I've ever had! Smooth planning, great destinations, and wonderful customer service throughout the entire trip. Tour on Wheels truly knows how to create an exceptional travel experience."
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava04} className="w-25 h-25 rounded-4" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Thevindu Batuwangala</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>
            "Fantastic tour from beginning to end! From booking to the final day, everything was seamless and stress-free. The sights and experiences were incredible, and the service was outstanding. Tour on Wheels made our trip unforgettable."
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava05} className="w-25 h-25 rounded-4" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Adithya Sathsara</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>
            "Tour on Wheels exceeded our expectations in every way. The attention to detail, personalized touches, and excellent service made our vacation truly special. From start to finish, everything was perfect. We'll definitely be recommending them to all our friends and family."
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava06} className="w-25 h-25 rounded-4" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Dineth Nimsara</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
    </Slider>
  );
};

export default Testimonials;
