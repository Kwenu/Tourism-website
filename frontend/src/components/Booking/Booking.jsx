import React, { useState, useContext } from "react";
import "../Booking/booking.css";
import { Form, FormGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";

const Booking = ({ tour }) => {
  const { title } = tour;
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [booking, setBooking] = useState({
    userId: user ? user._id : "",
    userEmail: user ? user.email : "",
    tourName: title,
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setBooking((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      return alert("Please login to book");
    }

    try {
      const response = await fetch(`${BASE_URL}/booking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(booking),
      });

      const result = await response.json();

      if (!response.ok) {
        return alert(result.message || "Failed to create booking");
      }

      // Send the booking details via email
      await sendBookingEmail(booking);

      navigate("/thank-you");
    } catch (err) {
      alert(err.message || "An error occurred. Please try again.");
    }
  };

  const sendBookingEmail = async (bookingDetails) => {
    try {
      const emailResponse = await fetch(`${BASE_URL}/api/v1/email/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "kisarawenuraka956@gmail.com", 
          subject: "New Tour Booking",
          text: `
            A new booking has been made with the following details:
            - Tour Name: ${bookingDetails.tourName}
            - Full Name: ${bookingDetails.fullName}
            - Phone: ${bookingDetails.phone}
            - Guest Size: ${bookingDetails.guestSize}
            - Booking Date: ${bookingDetails.bookAt}
          `,
        }),
      });
  
      if (!emailResponse.ok) {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error.message);
    }
  };

  return (
    <div className="booking">
      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleSubmit}>
          <FormGroup className="form-input">
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="form-input">
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="form-input d-flex align-items-center gap-3">
            <input
              type="date"
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Guest"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <Button className="btn primary__btn w-100 mt-4" type="submit">
            Book Now
          </Button>
        </Form>
      </div>
      <div>
        <p className="text-center mt-3">
          <small>
            By booking, you agree to the Terms of Service and Privacy Policy
          </small>
        </p>
      </div>
      <div>
        <p className="text-center mt-3">
          <small>
            <strong>Need help?</strong> Call us at +94 77 234 5678
          </small>
        </p>
      </div>
    </div>
  );
};

export default Booking;
