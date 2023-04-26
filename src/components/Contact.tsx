import React from "react";

export class Contact extends React.Component {
  render() {
    return (
      <div className="box" id="Contact">
        <h1 style={{ textAlign: "center" }}>
          <u>Contact</u>
        </h1>
        <div className="contactBox">
          <p>
            E-mail: <a href="mailto:kizune@000198.xyz">kizune@000198.xyz</a>
          </p>
        </div>
      </div>
    );
  }
}