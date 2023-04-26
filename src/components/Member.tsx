import React from "react";

export class Member extends React.Component {
  render() {
    return (
      <div className="box" id="Member">
        <h1 style={{ textAlign: "center" }}>
          <u>Organize Member</u>
        </h1>

        <div className="container">
          <div className="cardBox">
            <img
              src="https://avatars.githubusercontent.com/u/25049577?v=4"
              alt="deth"
            />
            <h3>
              <a href="https://github.com/dethMastery">
                Suphakit P. (dethMastery)
              </a>
            </h3>
            <span>a music composer with full-stack web dev. skill :D</span>
          </div>

          <div className="cardBox">
            <img
              src="https://avatars.githubusercontent.com/u/79712705?v=4"
              alt="deth"
            />
            <h3>
              <a href="https://github.com/mTy8421">Panthakit Totid (mTy8421)</a>
            </h3>
            <span>🤔😒</span>
          </div>
        </div>
      </div>
    );
  }
}