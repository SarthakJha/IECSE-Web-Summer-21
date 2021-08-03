import React, { Component } from 'react'
import play from '../play.png'

export default class Song extends Component {
    render() {
        return (
    <div className={`row song ${this.props.cname}`}>

        <div className="music">
        {this.props.id}
          </div>
          <div className="music1" id="title">
          <a onClick={this.props.onClick}>
          {this.props.title}
          </a>
          </div>
          <div className="music2" id="dur">
          {this.props.duration}
          </div>
          <div className="artists" id="art">
          {this.props.artists}
          </div>
          <div className="music3" id="play">
          <button onClick={this.props.onClick} className="click">
          <img className="play2" src={play}></img>
          </button>

          </div>               
    </div>
        )
    }
}
