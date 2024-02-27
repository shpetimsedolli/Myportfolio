import React, { useRef } from "react";
import "./Form.css";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_nxierdr", "template_ttqx976", form.current, {
        publicKey: "rnE2OkGY9yCNfsZzr",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact">
      <div className="container">
        <form ref={form} action="" onSubmit={sendEmail}>
          <div className="formwrap" data-aos="fade-up">
            <div className="inputwrap">
              <input
                type="text"
                placeholder="Your Name"
                name="from_name"
                className="input1"
              />
              <input
                type="email"
                name="from_email"
                placeholder="Enter Email"
                className="input2"
              />
            </div>
            <textarea
              name="message"
              cols="30"
              rows="10"
              defaultValue="Write something!"
              className="textarea3"
            ></textarea>
            <div className="form__message">
              <button type="submit" value="Send">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
