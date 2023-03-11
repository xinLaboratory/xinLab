import React from "react";

export class Head extends React.Component {
  render() {
    return <div className="middle">
      <h1>
        Welcome to {this.props.name}
      </h1>
    </div>;
  }
}