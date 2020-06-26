import React, { Component } from "react";
import arrow from "../assets/images/Arrow2.png";
import { Control, Form, Errors, actions } from "react-redux-form";
import "../css/form.css";
import axios from "axios";

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
    this.state = {
      countryName: "",
      countryCode: "",
    };
  }

  getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        this.setState({
          countryName: data.country_name,
          countryCode: data.country_calling_code,
        });
        console.log(this.state.countryName);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getGeoInfo();
  }

  async handleSubmit(values) {
    let formdata = new FormData();
    formdata.append("full_name", values.name);
    formdata.append("email", values.email);
    formdata.append("message", values.message);

    await fetch("https://digifigs.com/contact-v2/", {
      method: "POST",
      mode: "no-cors",
      body: formdata,
    });

    this.props.resetForm();
  }

  render() {
    return (
      <div className="container formcontainer" id="get-started">
        <div className="row">
          <div className="col ready">Ready to Start ?</div>
        </div>
        <div className="row contactContainer">
          {this.state.countryName !== "Nigeria" ? (
            <div></div>
          ) : (
            <div className="col-12 col-sm-12 col-md-12">
              <h4 className="contactText">
                <a href="tel:+2348102263874">0810 226 3874</a>
              </h4>
              <h5 className="callus">Call us</h5>
            </div>
          )}

          <div className="col-12 col-sm-12 col-md-12">
            <h4 className="contactText">
              <a href="mailto:info@digifigs.com">info@digifigs.com</a>
            </h4>
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
            <Form
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
                    required: "This field is required ",
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
                <button
                  className="btn btn-primary"
                  type="submit"
                  style={{ height: "50px" }}
                >
                  Send
                  <img className="arrow" src={arrow} alt="" />
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
