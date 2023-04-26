import React from "react";

export class Contact extends React.Component {
  render() {
    return (
      <div className="box" id="Contact">
        <h1 style={{ textAlign: "center" }}>
          <u>Contact</u>
        </h1>
        <div className="contactBox" style={{textAlign: "center"}}>
          <h3>Need some contact? Click a button below. :)</h3>
          <br />
          <a href="mailto:xin@caffe.quest" className="contactButton">
            Click For Contact
          </a>
        </div>
      </div>
    );
  }
}
