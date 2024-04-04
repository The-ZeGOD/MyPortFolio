import "./Mainsection.css"
import React, { Component } from 'react'

class Mainsection extends Component{
  render(){
    return (
      <div className="mainsection">
        <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.paragraph}</p>
        </div>
      </div>
    )
  }
}

export default Mainsection