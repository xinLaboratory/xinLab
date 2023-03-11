import React from "react";

export class Head extends React.Component {
  render() {
    return <span>
      <div className="middle" id="topPage" style={{ background: `url(${this.props.bg})` }}>
        <div className="overlay">
          <h1 className="startup">
            Welcome to {this.props.name}
          </h1>
        </div>
      </div>
    </span>;
  }
}