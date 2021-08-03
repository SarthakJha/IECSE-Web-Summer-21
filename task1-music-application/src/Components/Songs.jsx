import React, { Component } from 'react'
import play from '../Play-icon.jpeg'

// This is a class component
export default class Songs extends Component {
    render() {
        return (
    <div className={`row song ${this.props.cname}`}>

          <div className="col-lg-1">
          {this.props.id}
          </div>
          <div className="col-lg-6" id="title">
          <a onClick={this.props.onClick}>
          {this.props.title}
          </a>
          </div>
          <div className="col-lg-2" id="dur">
          {this.props.duration}
          </div>
          <div className="col-lg-2" id="play">
          <button onClick={this.props.onClick} className="shush">
          <img className="playy" src={play}></img>
          </button>

          </div>               
    </div>
        )
    }
}
