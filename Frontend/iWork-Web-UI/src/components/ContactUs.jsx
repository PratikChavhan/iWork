import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./css/ContactUs.css";
import contactimg from "../assests/contactimg.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const prevFormDataRef = useRef(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_jujhppi";
    const templateId = "template_f1e2mzm";
    const publicKey = "Pys8WNftENKvN5wQs";

    // Create a new object that contains dynamic template params
    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        prevFormDataRef.current = formData;
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        e.target.reset();
        alert("Email Sent succesfully");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="container-contact">
      <div className="row  m-4 py-4">
        <div className="col-md-6 contact-info">
          <h2>Reach us out</h2>
          <hr name="heading-line" />
          <p>We're open for any suggestion or just to have a chat</p>
          <div className="info-item">
            <i className="fa fa-map-marker-alt"></i>
            <a href="https://maps.app.goo.gl/oWDYvw9usWfi35gJ7">
              4th Floor, Manikchand Galleria, Model Colony, Shivaji Nagar, Pune
              411016
            </a>
          </div>
          <div className="info-item">
            <i className="fa fa-phone"></i>
            <a href="tel://9175857928">+91-9175857928</a>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <a href="mailto:info@iWork.com">info@iWork.com</a>
          </div>
          <div className="info-item">
            <i className="fas fa-globe"></i>
            <a href="/">iWork.com</a>
          </div>
          <div className="info-item justify-content-center">
            <img
              src={contactimg}
              alt="contact-us"
              loading="lazy"
              draggable="false"
            ></img>
          </div>
        </div>
        <div className="col-md-6 contact-form">
          <h2>Get in touch</h2>
          <hr name="heading-line" style={{ backgroundColor: "#474a4a" }} />
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>FULL NAME</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>EMAIL ADDRESS</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>SUBJECT</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>MESSAGE</label>
              <textarea
                placeholder="Message"
                name="message"
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
