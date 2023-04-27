import React from "react";

interface repoInterface {
  id: number;
  name: string;
  img: string;
  link: string;
  desp: string;
}

export class Repo extends React.Component {
  RepoData: repoInterface[] = [
    {
      id: 0,
      name: "CMMT 2023",
      img: "https://cdn.jsdelivr.net/gh/xinLaboratory/assets@master/Homepage/Works/cmmt2023.webp",
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
          <u>Proudly presented works</u>
        </h1>

        <div className="container">
          {this.RepoData.map((repoData: repoInterface) => {
            return (
              <div
                className="cardBox workCard"
                key={repoData.id}
                style={{ background: `url(${repoData.img})` }}
              >
                <div className="bib">
                  <a href={repoData.link}>
                    <h1>{repoData.name}</h1>
                  </a>
                  <p>{repoData.desp}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
