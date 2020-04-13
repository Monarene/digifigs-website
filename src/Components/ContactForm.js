import React from "react";
import arrow from '../assets/images/Arrow2.png'

import "../css/form.css";

const ContactForm = () => {
  return (
    <div className="container formcontainer">
      <div className="row">
        <div className="col ready">Ready to Start ?</div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 contactContainer">
          <h4 className="contactText">0800 000 0000</h4>
          <h5 className="callus">Call us</h5>
        </div> 
        <div className="col-12 col-sm-12 col-md-12 contactContainer">
          <h4 className="contactText">hello@digifigs.com</h4>
          <h5 className="callus">
            {/* {" "} */}
            Send an e-mail
          </h5>
        </div>
        
      </div>
      <div>
          <h6 className="amessage"> or drop a message here</h6>
      </div>
      <div className="row">
        <div>
          <form>
            <div className="form-group">
              <input
                type="name"
                name="name"
                id="name"
                placeholder="full Name"
                className="inputtext"
              />
            </div>
            <div className="form-group">
              <input
                className="inputtext"
                type="email"
                name="emaill"
                id="email"
                placeholder="email Address"
              />
            </div>
            <div className="form-group">
              <textarea
                className="inputtext"
                type="textarea"
                placeholder="message"
                rows="5"
                cols="50"
              ></textarea>
            </div>
            <div className="row btn-wrapper">
              <button className="btn btn-primary">
                Send
                <img className="arrow" src={arrow} alt="" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
