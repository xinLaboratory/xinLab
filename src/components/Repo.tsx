import React from "react";

export class Repo extends React.Component {
  render() {
    return (
      <div className="box" id="Repo">
        <h1
          style={{
            textAlign: "center",
            paddingTop: "3rem",
            paddingBottom: "3rem",
          }}
        >
          <u>Featured Repository</u>
        </h1>

        <div className="container">
          <div className="cardBox">
            <a href="https://github.com/KIZUNEParty/tyDon">
              <h1>tyDon</h1>
            </a>
            <p>
              Just a laziest cli package that making for convert time to
              epochtime.
            </p>
          </div>
        </div>
      </div>
    );
  }
}