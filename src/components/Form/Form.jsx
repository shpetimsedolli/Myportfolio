import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <div>
      <div className="container">
        <form action="">
          <div className="formwrap">
            <div className="inputwrap">
              <input type="text" placeholder="Your Name" className="input1" />
              <input
                type="email"
                placeholder="Enter Email"
                className="input2"
              />
            </div>
            <textarea name="" id="" cols="30" rows="10" className="textarea3">
              Write Something
            </textarea>
          </div>
        </form>
        <div className="form__message">
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
