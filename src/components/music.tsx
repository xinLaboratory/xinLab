import React from "react";
import axios from 'axios';

export class MusicBox extends React.Component {
  state = {
    info: [],
  }

  componentDidMount() {
    axios.get('https://yt.000198.xyz/api/?link=https://youtu.be/sMn1-Qjz7uQ')
        .then(rsp => {
          const info = rsp.data.info

          this.setState({info})
        })
  }

  render() {
    return (
      <div className="fixedFooter">
        
      </div>
    )
  }
}
