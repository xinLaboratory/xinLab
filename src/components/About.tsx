import React from "react";

export class About extends React.Component {
  render() {
    return (
      <div className="box" id="About">
        <h1 style={{ textAlign: "center", paddingTop: "1rem" }}>
          <u>About</u>
        </h1>
        <div
          className="contactBox"
          style={{
            textAlign: "center",
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h3>
            `Xin Lab` is an organized that founded on `2023` which is created for keeping `Sinners` in their
            touch. Started from a project of `Chiang Mai MaiMai Tournament 2023` and would be more of works in the future.
          </h3>
        </div>
      </div>
    );
  }
}
