import React, { Component } from 'react';
import dummy from './dummy';

class Images extends React.Component {
  state = {
    dummy
  };

  render() {
    return (
    <div>

    {console.log(this.props.searchName)}
    {console.log("oui")}

    {this.state.dummy.map(dummy => {
        return (
          <div key={dummy.id} className="img">
            <span>{dummy.username}</span>
            <br />
            <img src={dummy.picture} alt=""/>
          </div>
               )
      })
     }
    </div>
    )
  }
}

export default Images;
