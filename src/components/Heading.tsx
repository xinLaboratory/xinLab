import React from "react";
import Logo from "../assets/Logos/Logo.svg";

export class Head extends React.Component<any, any> {
  render() {
    return (
      <div
        className="middle"
        id="topPage"
        style={{ background: `url(${this.props.bg})` }}
      >
        <div className="overlay">
          <h1 className="startup">
            <a href="https://github.com/xinLaboratory">
              <img src={Logo} alt="xinLab Logo" width="200px" /> <br />
            </a>
            <a href="https://github.com/xinLaboratory">Xin Laboratory</a>
          </h1>
          <h3>a Little Lab for Sinner</h3>
        </div>
      </div>
    );
  }
}