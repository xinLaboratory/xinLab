import React from "react";

interface repoInterface {
  id: number;
  name: string;
  link: string;
  desp: string;
}

export class Repo extends React.Component {
  RepoData: repoInterface[] = [
    {
      id: 0,
      name: "CMMT 2023",
      link: "https://cmmt.caffe.quest",
      desp: "This Project just get started by `Mr. Tatsuya` and many of comment by various member in `GrassRoot Community` for `Chiang Mai MaiMai Tournament`",
    },
  ];

  render() {
    return (
      <div className="box" id="Repo">
        <h1
          style={{
            textAlign: "center",
            paddingBottom: "1rem",
          }}
        >
          <u>Featured Repository</u>
        </h1>

        <div className="container">
          {this.RepoData.map((repoData: repoInterface) => {
            return (
              <div className="cardBox" key={repoData.id}>
                <a href={repoData.link}>
                  <h1>{repoData.name}</h1>
                </a>
                <p>
                  {repoData.desp}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
