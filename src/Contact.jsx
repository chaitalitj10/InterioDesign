import React from "react";
import emailjs from "emailjs-com";

function Contact() {
  function sendEmail(event) {
    event.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_1yttbi2",
        event.target,
        "user_6EvY7kGREd9nTVjR79O2S"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    event.target.reset();
  }
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={sendEmail}>
              <div className="form-group">
                <label for="exampleInputEmail1">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your full name"
                  name="name"
                />
              </div>
              <br />
              <div className="form-group">
                <label for="exampleInputEmail1">Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter phone number"
                  name="phoneNumber"
                />
              </div>
              <br />
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name="email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <br />
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                ></textarea>
              </div>
              <br />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
