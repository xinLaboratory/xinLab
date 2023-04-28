import React from "react";

interface memberInterface {
  id: number;
  image: string;
  username: string;
  name: string;
  desp: string;
}

export class Member extends React.Component {
  userData: memberInterface[] = [
    {
      id: 0,
      image: "https://avatars.githubusercontent.com/u/25049577?v=4",
      username: "dethMastery",
      name: "Suphakit P.",
      desp: "a music composer with full-stack web dev. skill :D",
    },
    {
      id: 1,
      image: "https://avatars.githubusercontent.com/u/1833001?v=4",
      username: "kana2011th",
      name: 'Khanaphon "kana" Phaengtan',
      desp: "full-stack dev. now in sup. stuck in port.",
    },
    {
      id: 2,
      image: "https://avatars.githubusercontent.com/u/79712705?v=4",
      username: "mty8421",
      name: "Panthakit totid",
      desp: "🤔😒",
    },
  ];

  render() {
    return (
      <div className="box" id="Member">
        <h1 style={{ textAlign: "center" }}>
          <u>Organize Member</u>
        </h1>

        <div className="container">
          {this.userData.map((user) => {
            return (
              <div className="cardBox memberCard">
                <div
                  className="picture"
                  style={{ background: `url(${user.image})` }}
                ></div>
                <div className="profileInfo">
                  <h3 style={{margin: 0}}>
                    <a href={"https://github.com/" + user.username}>
                      {user.name} ({user.username})
                    </a>
                  </h3>
                  <span>{user.desp}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
