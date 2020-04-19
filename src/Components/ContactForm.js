import React, { Component } from "react";
import arrow from "../assets/images/Arrow2.png";
import { Control, LocalForm, Errors, actions } from "react-redux-form";
import "../css/form.css";

//TODO implement the form in react redux state
//TODO implement form validation in react redux state
//TODO implement cancelling the form on Component Did Mount

const required = (val) => val && val.length;
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log("You have sent the message " + JSON.stringify(values));
    alert("You have successfully submitted the form" + JSON.stringify(values));
    actions.setInitial("sendMessage");
  }

  render() {
    return (
      <div className="container formcontainer" id="get-started">
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
            <LocalForm
              model="sendMessage"
              onSubmit={(values) => this.handleSubmit(values)}
            >
              <div className="form-group">
                <Control.text
                  model=".name"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="full Name"
                  className="inputtext"
                  validators={{ required }}
                />
                <Errors
                  className="text-danger"
                  model=".name"
                  show="touched"
                  messages={{ required: "This field is required " }}
                />
              </div>
              <div className="form-group">
                <Control.text
                  model=".email"
                  className="inputtext"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email Address"
                  validators={{ required, validEmail }}
                />
                <Errors
                  className="text-danger"
                  model=".email"
                  show="touched"
                  messages={{
                    required: "This field is required",
                    validEmail: "Please enter a valid email address",
                  }}
                />
              </div>
              <div className="form-group">
                <Control.textarea
                  model=".message"
                  className="inputtext"
                  type="textarea"
                  placeholder="message"
                  rows="5"
                  cols="50"
                />
              </div>
              <div className="row btn-wrapper">
                <button className="btn btn-primary" type="submit">
                  Send
                  <img className="arrow" src={arrow} alt="" />
                </button>
              </div>
            </LocalForm>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
