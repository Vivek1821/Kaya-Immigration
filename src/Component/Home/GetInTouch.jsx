import React from "react";
import "./GetInTouch.css";

const GetInTouch = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">Contact</p>

            <div className="info">
              <div className="information">
                <img src="img/location.png" className="icon" alt="" />
                <p> Wework Futura, Magarpatta</p>
              </div>
              <div className="information">
                <img className="icon" alt="" />
                <p>kayagroup2023@gmail.com</p>
              </div>
              <div className="information">
                <img src="img/phone.png" className="icon" alt="" />
                <p>+918600876878</p>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="#">
                  <i className="https://i.imgur.com/JkIA9rz.png"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form>
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Username"
                />
              </div>
              <div className="input-container">
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
              </div>
              <div className="input-container">
                <input
                  type="tel"
                  name="phone"
                  className="input"
                  placeholder="Phone"
                />
              </div>
              <div className="input-container textarea">
                <textarea
                  name="message"
                  className="input text-white"
                  placeholder="Message"
                ></textarea>
              </div>
              <input type="submit" value="Send" className="btn text-black" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
